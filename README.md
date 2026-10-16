# CBN Boost 1.1.1

Aplicativo Windows reconstruído a partir de `TogsBoost-Setup.exe`, com nome e
marca CBN Boost e abertura direta, sem login ou chave de ativação.

O projeto usa as tecnologias observadas na distribuição: Electron,
JavaScript/React, CSS/Tailwind e PowerShell. A interface compilada foi recuperada,
formatada e modificada; o backend local é código novo e editável. O instalador
continha o processo principal em bytecode Bytenode e não incluía JSX/TypeScript,
mapas de fonte nem a maioria dos scripts remotos. Este projeto não representa
recuperação integral do código original.

## Executar no Windows

1. Copie `dist/CBN-Boost-win-x64.zip` para o Windows 10/11 x64.
2. Extraia o ZIP inteiro e abra `CBN-Boost-win-x64/CBN Boost.exe`.
3. Autorize a solicitação de administrador do Windows.
4. Selecione as operações na interface. Abrir o aplicativo não aplica ajustes.

Mantenha `resources`, `locales`, DLLs e demais arquivos junto do executável. O
`.exe` depende desses arquivos; copiar apenas ele não é suficiente. O pacote é
portátil, sem instalador e sem chave. A execução efetiva no Windows fica para o
teste nesse sistema; nenhum ajuste Windows foi executado na reconstrução WSL.
O executável não possui assinatura digital Authenticode.

## Funções locais

- Catálogo de 29 itens: 28 implementados (22 ajustes reversíveis e 6 ações).
  Wi-Fi Sense está marcado como obsoleto porque foi removido do Windows atual.
- Aplicação com cópia persistida dos valores anteriores, verificação e tentativa
  de restauração em caso de falha parcial. Restaurar recupera essa cópia.
- Limpeza de temporários antigos, Prefetch, miniaturas, Lixeira e downloads do
  Windows Update. Arquivos em uso são ignorados; os bytes contados foram removidos.
- Informações de hardware e Windows; a memória de vídeo dedicada vem do DXGI de 64 bits. A correção do limite de 4 GB do WMI está em [docs/hardware-vram.md](docs/hardware-vram.md).
- Listagem, criação, restauração e exclusão confirmada de pontos de restauração.
- Catálogo recuperado de aplicativos com instalação/remoção pelo WinGet.
- Logs locais, controle da janela, idiomas, tema e reinicialização confirmada.

Os 12 recursos novos foram implementados com documentação primária, mantendo
seu alcance e limites claros. Remoções seletivas, Copilot, Xbox, OneDrive, limpeza
nativa, PowerShell 7, RSS, serviços, localização, Defender e NVIDIA estão
detalhados em [docs/FEATURES_1.1.md](docs/FEATURES_1.1.md). Jogos em janela e
Limpeza de Disco abrem as ferramentas nativas para você escolher as opções.
As escolhas da reconstrução inicial estão em
[cbn-boost/tweaks/RECONSTRUCTION.md](cbn-boost/tweaks/RECONSTRUCTION.md).
Verificar valores do registro não comprova ganho de FPS ou efeito no driver.

A interface carrega arquivos locais e não consulta o servidor original. A
instalação de aplicativos pelo WinGet precisa de internet e do App Installer do
Windows; os identificadores recuperados podem deixar de existir nas fontes.
Inventário de aplicativos usa a exportação JSON do WinGet, limitada aos pacotes
que ele consegue associar às fontes. A VRAM usa DXGI e pode ficar indisponível se o Windows não conseguir associar o
adaptador ao nome informado pelo driver. Restauração depende da Proteção do Sistema do Windows.

## Editar e gerar outro pacote

Estrutura principal:

```text
cbn-boost/main/          Backend novo, bridge e validação de IPC
cbn-boost/renderer/      React/CSS compilados recuperados e modificados
cbn-boost/tweaks/        Metadados recuperados e descrição da reconstrução
cbn-boost/resources/     Motor de registro e catálogo de aplicativos
cbn-boost/tests/         Testes com executores simulados
scripts/                Extração e empacotamento offline
tests/                  Verificação independente de ASAR e recursos PE
docs/                   Contrato, proveniência e evidências resumidas
```

O empacotamento atual usa Python 3.10+ e o runtime já extraído, sem precisar
baixar dependências ou compilar código nativo:

```bash
python3 scripts/build-portable.py
```

Na cópia obtida do Git ou do ZIP de fontes, forneça a pasta completa do pacote
portátil como runtime:

```bash
python3 scripts/build-portable.py --runtime /caminho/CBN-Boost-win-x64
```

O runtime precisa permanecer fora da pasta de fontes. O script gera outro pacote
em `dist/`, recria o ASAR, atualiza os recursos de marca e sua integridade e
preserva o código e os fuses do Electron. Os binários do runtime ficam no pacote
de distribuição, não no ZIP de fontes ou no Git.

Para desenvolver com Electron instalado, use Node.js 22.12+ e:

```bash
npm install
npm start
```

`npm start` serve para desenvolvimento; no Linux, as operações Windows retornam
erro e não alteram o host. O Electron de desenvolvimento foi fixado em 38.0.0,
versão declarada nas strings do runtime recuperado. O pacote entregue reutiliza
esse runtime e ainda exige confirmação de versão/execução no Windows.

## Verificação

```bash
npm test
npm run test:packaging
npm run test:renderer
python3 scripts/package-source.py
```

Os testes de backend usam executores simulados: verificam restauração, falha
parcial, validação, cancelamento e ausência de falso sucesso. Os testes de
empacotamento verificam estrutura PE, marca, manifest, fuses e hashes; a leitura
independente do ASAR usa `@electron/asar` quando disponível. O teste da interface
usa Chromium e um bridge simulado, sem executar PowerShell.

Após testar no Windows, logs ficam em `%APPDATA%\CBN Boost\logs\app.log` e as
cópias dos ajustes em `%APPDATA%\CBN Boost\tweak-snapshots.json` e do Terminal em
`%APPDATA%\CBN Boost\feature-backups\`. Preserve as cópias
enquanto houver ajustes aplicados; elas contêm os valores para restaurar.
Limpar o cache do aplicativo preserva as cópias de restauração. A instalação do
PowerShell permanece após reverter o perfil padrão do Terminal. Remoções Appx
e OneDrive precisam de reinstalação manual, conforme os avisos da interface.

## Proveniência

[RECOVERY_STATUS.md](RECOVERY_STATUS.md) descreve a extração, as evidências e os
limites da recuperação. A licença do material original e os avisos de terceiros
estão preservados em
[cbn-boost/THIRD_PARTY_NOTICES.md](cbn-boost/THIRD_PARTY_NOTICES.md).
Preparar os fontes para versionamento não altera a licença dos componentes
recuperados. Nenhum repositório remoto foi criado ou recebeu arquivos.

Referências das APIs usadas:
[segurança Electron](https://www.electronjs.org/docs/latest/tutorial/security),
[inventário JSON WinGet](https://learn.microsoft.com/en-us/windows/package-manager/winget/export),
[instalação WinGet](https://learn.microsoft.com/en-us/windows/package-manager/winget/install),
[exclusão de ponto de restauração](https://learn.microsoft.com/en-us/windows/win32/api/srrestoreptapi/nf-srrestoreptapi-srremoverestorepoint).
