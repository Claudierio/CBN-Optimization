# CBN Boost 1.1: resultado da recuperação

A reconstrução da interface e do backend local foi empacotada para Windows x64.
O instalador original continua preservado e o executável novo abre sem conta ou
chave. A interface e o código recuperados estão em `cbn-boost/`; o processo
principal original era bytecode Bytenode e não foi recuperado como fonte.

## Entrega

- Projeto editável e preparado para versionamento: `cbn-boost/`, `scripts/`,
  `tests/` e `docs/`.
- Fontes compactados: `dist/CBN-Boost-source.zip`.
- Pacote portátil para Windows: `dist/CBN-Boost-win-x64.zip`.
- Executável dentro do pacote: `dist/CBN-Boost-win-x64/CBN Boost.exe`.
- Hashes e verificações: `docs/verification.json` e arquivos `.sha256` em `dist/`.

Extraia o ZIP de Windows inteiro: o executável precisa de `resources`, `locales`,
DLLs e arquivos adjacentes. O Windows solicita privilégios administrativos. O
runtime não tem assinatura Authenticode. O ZIP de fontes não contém o runtime.
Nenhum repositório remoto foi criado ou alterado.

## Recuperação e funcionalidades

| Item | Resultado |
| --- | --- |
| Instalador original | 154 arquivos e 47 diretórios extraídos; CRCs e hashes verificados |
| Tecnologias observadas | Electron, React/JavaScript compilado, CSS/Tailwind e PowerShell |
| Código original | Recuperação parcial: renderer compilado recuperado; sem JSX/TypeScript, mapas de fonte ou fonte do backend Bytenode |
| Nome CBN Boost | Aplicado à interface, metadados do pacote, executável e recursos PE |
| Ativação | Não há chave, login ou servidor de autenticação no novo app |
| Catálogo | 29 itens: 28 recursos implementados (22 reversíveis e 6 ações); Wi-Fi Sense marcado como obsoleto |
| Implementação pesquisada | Doze dos treze itens antes indisponíveis receberam implementação local; o escopo consta em `docs/FEATURES_1.1.md` |
| Execução Windows | Ainda precisa ser validada no Windows; este ambiente WSL não executou comandos de sistema Windows |

As ações locais aplicam somente o escopo descrito, verificam dependências e
permissões no momento da execução e informam quando dependem de GPU/driver,
versão ou edição do Windows. Uma configuração registrada não comprova ganho de
FPS. Remoções de pacotes e limpeza nativa não oferecem reversão automática.

## Verificação da versão 1.1

- 84 verificações de backend passaram usando executores simulados; incluem
  conflitos, restauração e falhas parciais.
- 7 verificações de empacotamento passaram.
- Replay controlado em Chromium percorreu as seis páginas e dois cenários da
  primeira abertura; 0 requisições externas e 0 erros JavaScript não tratados.
- Catálogo real mostrou 29 itens, 28 disponíveis, 22 reversíveis, 6 ações e 1
  recurso obsoleto.
- ZIP portátil: 77 arquivos e CRC íntegro; hashes e recursos PE conferidos pelo
  empacotador. O ASAR inclui 83 arquivos editáveis da aplicação.
- Seções de código e fuses do Electron permaneceram iguais; manifest
  `requireAdministrator` foi mantido e os recursos de marca foram substituídos.
- O pacote não teve execução validada em Windows; integração NVAPI e comandos
  PowerShell exigem validação no sistema-alvo.

## Arquivo de origem e limites da análise

`TogsBoost-Setup.exe` foi preservado, SHA-256
`89f523b1f19cd2fd304ac14801b88867a82ebc3b13878e1354a326ededa3c274`. O payload
7z começa no offset 542660. Os arquivos extraídos e as evidências REA completas
ficam em `.recovery/` local e foram excluídos dos fontes compactados.

A análise REA original do renderer teve cobertura parcial por limite de heap; o
teste do renderer novo usa replay controlado com bridge IPC simulado. O código
principal original e os scripts remotos não foram recuperados. A implementação
1.1 foi escrita a partir de documentação pública e não certifica equivalência
com o serviço do fornecedor. A licença original e os avisos de terceiros foram
preservados em `cbn-boost/THIRD_PARTY_NOTICES.md`.
