# Registro da engenharia reversa e reconstrução

## Observado no artefato

Entrada `TogsBoost-Setup.exe`, SHA-256
`89f523b1f19cd2fd304ac14801b88867a82ebc3b13878e1354a326ededa3c274`.
O instalador NSIS contém um arquivo 7z no offset 542660. A extração própria
LZMA/LZMA2/BCJ2 verificou os CRCs disponíveis e produziu 154 arquivos e 47
entradas de diretório; hashes individuais estão no manifesto local.

O ASAR distribui um carregador Bytenode e `out/main/index.jsc`. O renderer é
React compilado em JavaScript, com CSS Tailwind já gerado. Há 29 metadados de
ajustes; somente HAGS traz o par apply/unapply PowerShell. O catálogo de
aplicativos possui 112 entradas. Não foram encontrados os fontes originais
JSX/TypeScript ou mapas nos arquivos empacotados examinados.

Evidências REA da investigação original:

| Evidência | Escopo | Limite |
| --- | --- | --- |
| `ev_18364e7943b9ea185286d91521b9b14e0512ad031216e3afc55d7e490eafccc4` | Inventário do instalador | Análise estática |
| `ev_430d43371ed3e71dd5c8839420c68f8a0f5fa2e455213f03ff64912a3b90e240` | Aplicação JS recuperada inicialmente | Cópia parcial, heap semântico excedido no renderer |
| `ev_7b4b27ac5d63579bf67510b5a3e501f04cfc844b6c3b33360bda3e6adb075dc5` | Resumo da análise anterior | Ausência de IPC detectado não prova ausência no app |

Os dados completos originais permanecem em `.recovery/rea-evidence.json`,
`.recovery/extraction-manifest.json` e `.recovery/full-app/`. Eles foram
excluídos do arquivo de fontes e do versionamento por volume e separação dos
artefatos originais.

## Reconstruído para CBN Boost 1.0

O renderer foi formatado e editado: marca nova, entrada direta, integrações
de autenticação/atualização/Discord/telemetria removidas, ícones e fontes locais,
tratamento de falhas e indicação de ajustes indisponíveis. O contrato extraído
e adaptado está em `renderer-contract.json`.

O processo principal, preload e scripts locais foram escritos em JavaScript
CommonJS/PowerShell. Os handlers validam o frame remetente, payloads, IDs e
scripts de limpeza; mutações são serializadas. Não há execução de comando
arbitrário recebido da interface. O contexto é isolado, o renderer usa sandbox
e a política de conteúdo bloqueia conexões externas. Sites do catálogo abrem
no navegador externo somente por ação confirmada.

Os 16 ajustes disponíveis possuem cópia persistida anterior à alteração e
verificação de leitura. Treze scripts remotos ausentes continuam indisponíveis.
As diferenças de valores, reversão e alcance estão detalhadas em
`../cbn-boost/tweaks/RECONSTRUCTION.md`. Este resultado é um clone local
reconstruído, com fidelidade parcial às funções do servidor original.

Análise REA focada de uma cópia do novo backend durante a integração:
`ev_924315cb6e147ccd0f66c9f8d0f8b41d9093d554d7639500b8a2cc69c8bf1c5c`
(resumo `ev_a1f829728c99d5e0a2ac9953b0c7407f8168666c145d02ffaccf918a9f28cafa`).
Nove arquivos JavaScript foram analisados sem falhas de parsing; foram observados
BrowserWindow, preload, contextBridge e checagem de remetente. A análise é
estática e parcial, não inclui o renderer e deixa canais dinâmicos sem resolver.
Ela não certifica segurança, equivalência ou execução no Windows.

## Verificação e lacunas

Testes de backend usam executores simulados e verificam cópia durável,
restauração, falha parcial, rollback, limites de comandos, cancelamento e
ausência de sucesso inventado. Testes de empacotamento validam recursos PE,
ASAR e hashes, incluindo leitura por `@electron/asar` independente.
O teste de UI usa Chromium e IPC simulado; seus dados de hardware são fictícios.

O executável entregue é o runtime Electron com recursos de marca/versionamento
e integridade atualizados, que carrega o novo ASAR. Seções de código e fuses
foram preservados, assim como o manifest `requireAdministrator`. O runtime
contém declarações Electron 38.0.0/Chromium 140.0.7339.41; confirmação por
execução ainda não foi feita.

Permanecem desconhecidos: fonte legível do bytecode original, código dos
serviços remotos, comportamento exato dos 13 scripts ausentes, efeitos dos
ajustes em cada versão do Windows e melhora de desempenho. Nenhum ajuste foi
aplicado ao host WSL, e nenhum executável Windows foi iniciado.

## Continuação na versão 1.1

A pedido do usuário, os 13 itens antes indisponíveis foram pesquisados em
fontes oficiais. Doze receberam implementação própria e Wi-Fi Sense foi
identificado como obsoleto. O escopo, reversibilidade, comportamento das ações
nativas e referências estão em [FEATURES_1.1.md](FEATURES_1.1.md). Os testes
atuais e hashes dos novos pacotes constam em `verification.json`; o relatório
da interface é `renderer-test-report.json`. As observações de análise estática
da fase 1.0 acima permanecem históricas e não certificam o código adicional.
