# Catálogo recuperado e execução local

O instalador contém 29 metadados de ajustes. Somente `enable-hags` inclui
`apply.ps1` e `unapply.ps1`; o `registry-scripts.json` possui scripts nulos para
os outros 28 itens. Os arquivos recuperados desta pasta foram preservados.
As URLs nos metadados indicam proveniência, não são usadas para baixar código.

`main/tweak-definitions.cjs`, `main/tweaks.cjs` e
`resources/registry-engine.ps1` são código novo, reconstruído a partir das
descrições disponíveis. Não são uma descompilação dos scripts ausentes nem do
backend Bytenode. Na versão 1.0 havia 15 ajustes de registro e um plano de energia; os demais
13 estavam indisponíveis. A versão 1.1 acrescenta 12 implementações pesquisadas
em documentação primária. O catálogo atual possui 28 recursos implementados: 22
reversíveis e 6 ações; Wi-Fi Sense é obsoleto. Veja
`../../docs/FEATURES_1.1.md` para o escopo e as fontes dos recursos novos.

## Diferenças intencionais

- Cada ajuste exige ação explícita na interface. Não há otimização automática.
- Antes da primeira alteração, os valores e tipos anteriores, inclusive valores
  inexistentes, são gravados em `tweak-snapshots.json` no diretório de dados.
- Valores QWord são armazenados como texto decimal para evitar perda de precisão
  no JSON. Tipos e caminhos são validados antes de usar uma cópia persistida.
- Restaurar recupera essa cópia, em vez de presumir padrões de fábrica.
- Chaves criadas pela operação são removidas somente se continuam vazias; outros
  valores e subchaves acrescentados posteriormente são preservados.
- Aplicações parciais tentam restaurar os valores anteriores. Se isso falhar,
  a cópia é mantida para uma nova tentativa explícita de restauração.
- Se a gravação da cópia falhar ou seu conteúdo não couber no comando necessário
  à restauração, a aplicação é recusada antes de alterar o Windows.
- A verificação confirma os valores do registro, não comprova efeitos no driver,
  melhora de FPS nem compatibilidade com todas as versões do Windows.
- O Explorer não é encerrado automaticamente. Alguns efeitos requerem sair da
  sessão ou reiniciar o computador.
- HAGS usa o valor 2 recuperado; restauração usa o valor anterior, em vez do
  valor fixo 1 do script original.
- `set-win32-priority-separation` usa 38 decimal (0x26), uma escolha explícita da
  reconstrução; o valor usado pelo servidor original é desconhecido.
- `enable-game-mode` define `AutoGameModeEnabled=1` e não altera captura de vídeo.
- `disable-lockscreen-tips` altera apenas `RotatingLockScreenOverlayEnabled` e
  `SubscribedContent-338387Enabled` no perfil atual.
- O plano Ultimate Performance é duplicado com GUID próprio, a partir do modelo
  Windows. Restauração reativa o plano anterior e remove somente a cópia criada.
- Não são aplicadas exclusões de antivírus. A opção nova de pausa do Defender
  requer confirmação, respeita a proteção contra adulteração e verifica o
  estado efetivo; o Windows pode religar a proteção automaticamente.
- O perfil NVIDIA recuperado é mantido para proveniência e não é importado. A
  opção nova usa NVAPI oficial, pelo driver instalado, para somente dois DWORDs
  públicos; restaura overrides, herança e padrões anteriores após verificação.

Nenhum script Windows foi executado durante a reconstrução no WSL. Testes com
executor simulado cobrem persistência, restauração, falha parcial e entradas
inválidas. A execução efetiva exige validação posterior em Windows.
