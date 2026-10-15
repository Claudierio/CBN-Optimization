'use strict';

// A small position-preserving JSONC reader. Replacements leave unrelated text,
// comments and trailing commas intact. Ambiguous duplicate keys are rejected.
function parseJSONC(text) {
  if (typeof text !== 'string' || text.length > 2 * 1024 * 1024) throw new Error('Configuração do Terminal inválida ou muito grande.');
  let at = text.charCodeAt(0) === 0xfeff ? 1 : 0;
  function whitespace() {
    while (at < text.length) {
      if (/\s/.test(text[at])) { at++; continue; }
      if (text.slice(at, at + 2) === '//') { while (at < text.length && text[at] !== '\n') at++; continue; }
      if (text.slice(at, at + 2) === '/*') {
        const end = text.indexOf('*/', at + 2);
        if (end < 0) throw new Error('Comentário incompleto no Terminal.');
        at = end + 2; continue;
      }
      break;
    }
  }
  function string() {
    const start = at++;
    while (at < text.length) {
      if (text[at] === '\\') { at += 2; continue; }
      if (text[at++] === '"') return {type: 'string', start, end: at, value: JSON.parse(text.slice(start, at))};
    }
    throw new Error('Texto incompleto no Terminal.');
  }
  function value(depth = 0) {
    if (depth > 100) throw new Error('Configuração do Terminal muito aninhada.');
    whitespace(); const start = at;
    if (text[at] === '"') return string();
    if (text[at] === '{') {
      at++; const members = [], data = Object.create(null), names = new Set(); whitespace();
      while (text[at] !== '}') {
        if (text[at] !== '"') throw new Error('Chave inválida na configuração do Terminal.');
        const key = string();
        if (names.has(key.value)) throw new Error(`Chave duplicada no Terminal: ${key.value}.`);
        names.add(key.value); whitespace();
        if (text[at++] !== ':') throw new Error('Separador inválido no Terminal.');
        const item = value(depth + 1); whitespace();
        const member = {key, node: item, start: key.start, end: item.end, comma: null};
        members.push(member); data[key.value] = item.value;
        if (text[at] === ',') { member.comma = at++; whitespace(); }
        else if (text[at] !== '}') throw new Error('Separador de campos inválido no Terminal.');
      }
      at++; return {type: 'object', start, end: at, value: data, members};
    }
    if (text[at] === '[') {
      at++; const elements = []; whitespace();
      while (text[at] !== ']') {
        const item = value(depth + 1); whitespace(); item.comma = null; elements.push(item);
        if (text[at] === ',') { item.comma = at++; whitespace(); }
        else if (text[at] !== ']') throw new Error('Separador de lista inválido no Terminal.');
      }
      at++; return {type: 'array', start, end: at, value: elements.map(item => item.value), elements};
    }
    const match = /^(?:true|false|null|-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)/.exec(text.slice(at));
    if (!match) throw new Error('Valor inválido na configuração do Terminal.');
    at += match[0].length;
    return {type: 'scalar', start, end: at, value: JSON.parse(match[0])};
  }
  const root = value(); whitespace();
  if (at !== text.length || root.type !== 'object') throw new Error('A configuração do Terminal deve ser um objeto JSONC.');
  return root;
}
function member(node, key) { return node.members.find(item => item.key.value === key); }
function splice(text, start, end, replacement) { return text.slice(0, start) + replacement + text.slice(end); }
function setObjectProperty(text, node, key, data) {
  const found = member(node, key);
  if (found) return splice(text, found.node.start, found.node.end, JSON.stringify(data));
  const prefix = node.members.length && node.members.at(-1).comma === null ? ',' : '';
  return splice(text, node.end - 1, node.end - 1, `${prefix}\n    ${JSON.stringify(key)}: ${JSON.stringify(data)}\n`);
}
function removeObjectProperty(text, node, key) {
  const index = node.members.findIndex(item => item.key.value === key);
  if (index < 0) return text;
  const found = node.members[index];
  if (found.comma !== null) return splice(text, found.start, found.comma + 1, '');
  if (index > 0) return splice(text, node.members[index - 1].comma, found.end, '');
  return splice(text, found.start, found.end, '');
}
function profilesNode(root) {
  const found = member(root, 'profiles');
  if (!found) return null;
  if (found.node.type === 'array') return found.node;
  if (found.node.type !== 'object') throw new Error('Lista de perfis inválida no Terminal.');
  const list = member(found.node, 'list');
  if (!list) return null;
  if (list.node.type !== 'array') throw new Error('Lista de perfis inválida no Terminal.');
  return list.node;
}
function addProfile(text, profile) {
  const root = parseJSONC(text), profiles = member(root, 'profiles'), list = profilesNode(root);
  if (list) {
    const prefix = list.elements.length && list.elements.at(-1).comma === null ? ',' : '';
    return splice(text, list.end - 1, list.end - 1, `${prefix}\n        ${JSON.stringify(profile)}\n`);
  }
  if (profiles) return setObjectProperty(text, profiles.node, 'list', [profile]);
  return setObjectProperty(text, root, 'profiles', {list: [profile]});
}
function removeProfile(text, guid, expectedProfile) {
  const list = profilesNode(parseJSONC(text));
  if (!list) return text;
  const index = list.elements.findIndex(item => String(item.value?.guid).toLowerCase() === guid.toLowerCase());
  if (index < 0) return text;
  const found = list.elements[index];
  // Keep a profile the user subsequently customized. The default is still restored.
  if (JSON.stringify(found.value) !== JSON.stringify(expectedProfile)) return text;
  if (found.comma !== null) return splice(text, found.start, found.comma + 1, '');
  if (index > 0) return splice(text, list.elements[index - 1].comma, found.end, '');
  return splice(text, found.start, found.end, '');
}
module.exports = {parseJSONC, member, setObjectProperty, removeObjectProperty, profilesNode, addProfile, removeProfile};
