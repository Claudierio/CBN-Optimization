# Recursos de aplicativos reconstruídos

Pesquisa e implementação local em 2026-10-14. Estes recursos foram escritos para o CBN Boost; não representam recuperação dos scripts remotos do TogsBoost. A implementação fica em `cbn-boost/main/app-features.cjs`, com scripts locais `cbn-boost/resources/app-feature-*.ps1`.

## Remoção seletiva, Xbox e Copilot

Os três recursos consultam o inventário Appx da conta atual, mostram somente pacotes do catálogo exato e oferecem seleção sem nenhuma marcação inicial. Frameworks, recursos e pacotes não removíveis são excluídos. O diálogo de confirmação identifica os aplicativos escolhidos e explica a possibilidade de remoção de dados locais. Após cada desinstalação, o inventário confirma a ausência; uma falha posterior informa os aplicativos cuja remoção parcial foi confirmada. A reversão automática não é oferecida.

`Get-AppxPackage` fornece o inventário e `Remove-AppxPackage -Package` remove da conta atual quando não são usados parâmetros para outros usuários. Esta implementação não altera provisionamento para contas futuras, políticas de bloqueio ou todas as contas. [Inventário Appx](https://learn.microsoft.com/en-us/powershell/module/appx/get-appxpackage), [remoção Appx](https://learn.microsoft.com/en-us/powershell/module/appx/remove-appxpackage).

O catálogo opcional inclui 18 aplicativos comuns, como Notícias, Clima, Solitaire, Clipchamp, To Do e Outlook para Windows. A lista é uma escolha de implementação do CBN Boost. A Microsoft documenta seleção por aplicativo e avisa que remoção de aplicativos pode eliminar dados locais; a política empresarial descrita nessa documentação não é aplicada pelo CBN Boost. Microsoft Store, Windows Security, Photos, Calculator e componentes principais são preservados. [Remoção seletiva documentada pela Microsoft](https://learn.microsoft.com/en-us/windows/configuration/policy-based-inbox-app-removal/policy-based-inbox-app-removal).

Xbox inclui somente os nomes exatos `Microsoft.GamingApp`, `Microsoft.XboxApp`, `Microsoft.XboxGamingOverlay` e `Microsoft.XboxGameOverlay`. Gaming Services, Identity Provider, jogos instalados, serviços e drivers são preservados. A ausência dos pacotes elegíveis é um resultado confirmado, não uma mudança fictícia.

Copilot remove somente `Microsoft.Copilot`, a experiência consumidora documentada pela Microsoft. Não remove o portal Microsoft 365, nem altera Copilot no Edge ou recursos de outros aplicativos. A documentação atual trata `TurnOffWindowsCopilot` como política legada e recomenda mecanismos diferentes para impedir instalação; o CBN Boost oferece apenas a desinstalação explícita, sem prometer bloqueio permanente de reinstalação. [Gerenciamento atual do aplicativo Copilot](https://learn.microsoft.com/en-us/windows/client-management/manage-windows-copilot).

## OneDrive

O recurso desinstala exclusivamente `Microsoft.OneDrive` com WinGet e correspondência exata. Ele não apaga ou move pastas de sincronização, documentos, registros de Known Folder Move ou arquivos da nuvem. A confirmação informa que sincronização e downloads de arquivos somente online deixarão de funcionar. A Microsoft distingue o cliente de sincronização do aplicativo de visualização da Store e explica o efeito da desinstalação sobre a sincronização. [Documentação Microsoft OneDrive](https://support.microsoft.com/en-us/onedrive/reinstall-onedrive).

O inventário WinGet usa seu arquivo JSON exportado, sem depender das colunas traduzidas de uma tabela. A Microsoft avisa que aplicativos sem correspondência de manifesto podem ficar fora do export. Por isso também verificamos registros de desinstalação e locais conhecidos do executável. Se OneDrive existe e WinGet não o reconhece, a operação é recusada com instrução para usar Configurações; ausência em export não é tratada isoladamente como desinstalação bem-sucedida. [Exportação WinGet](https://learn.microsoft.com/en-us/windows/package-manager/winget/export), [desinstalação exata](https://learn.microsoft.com/en-us/windows/package-manager/winget/uninstall), [manifesto Microsoft.OneDrive](https://github.com/microsoft/winget-pkgs/tree/master/manifests/m/Microsoft/OneDrive).

## Limpeza de Disco

O recurso abre `cleanmgr.exe /d` para a unidade do Windows. Categorias e confirmação de exclusão ficam na ferramenta nativa. Não usa flags de limpeza automática, não altera categorias de Registro e não informa bytes liberados. `verified: true` significa criação confirmada do processo, com resumo explícito de que a janela foi aberta. [Comando cleanmgr e parâmetro /d](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/cleanmgr).

## PowerShell 7 e Windows Terminal

O recurso verifica uma instalação estável de PowerShell 7 por execução do binário em local conhecido. Quando necessária, instala o identificador exato `Microsoft.PowerShell` pelo WinGet, com confirmação de download e dos termos, verificação do inventário posterior e nova consulta de versão. A documentação atual informa mudanças entre distribuição MSI e MSIX; a implementação aceita as duas por descobrir o executável em locais conhecidos. Não modifica o Windows PowerShell 5.1. [Instalação oficial do PowerShell no Windows](https://learn.microsoft.com/en-us/powershell/scripting/install/install-powershell-on-windows).

O perfil padrão é uma propriedade `defaultProfile` do Windows Terminal, distinta do aplicativo de terminal padrão do sistema. O CBN Boost cria um perfil próprio com GUID reservado e comando apontando para o executável verificado. Não altera os perfis existentes ou fontes dinâmicas. O uso de perfil explícito também evita depender do perfil dinâmico escolhido pelo Terminal, cujo código seleciona a instalação preferida e pode incluir uma versão Preview. [Propriedade defaultProfile](https://learn.microsoft.com/en-us/windows/terminal/customize-settings/startup), [perfis dinâmicos](https://learn.microsoft.com/en-us/windows/terminal/dynamic-profiles), [gerador oficial de perfis](https://github.com/microsoft/terminal/blob/main/src/cascadia/TerminalSettingsModel/PowershellCoreProfileGenerator.cpp).

É necessário abrir o Terminal ao menos uma vez para que exista `settings.json`. A ordem de procura é Terminal estável da Store, Terminal sem pacote e Terminal Preview da Store. A implementação preserva JSONC, comentários, BOM UTF-8 e propriedades sem relação com a alteração. Configurações ambíguas com chaves duplicadas são recusadas.

Antes da mutação, o manager persiste o snapshot original com SHA-256 e conteúdo bruto. A gravação cria backup bruto, detecta alterações concorrentes e substitui o arquivo por rename de temporário na mesma pasta. A reversão restaura somente a presença/valor anterior de `defaultProfile`, preservando mudanças novas de tema e outras propriedades. Remove o perfil CBN apenas se ainda corresponde ao perfil aplicado; um perfil personalizado posteriormente é mantido. Se o usuário mudou o perfil padrão fora do CBN, a reversão é recusada para não sobrescrever essa escolha. PowerShell instalado permanece instalado após desfazer o perfil.

## Verificação e limites

`node tests/app-features.test.cjs` executa 18 testes com inventário/processos simulados. São verificados seleção vazia, catálogo exato, falha parcial, inventário que não confirma remoção, JSONC complexo, restauração preservando alterações posteriores, snapshot adulterado, recusa de alterações concorrentes, cancelamento antes de gravar a configuração, instalação PowerShell verificada e falha do instalador, desinstalação OneDrive exata, retorno honesto da limpeza e recusa de execução no Linux. Nenhum comando de alteração do Windows foi executado no WSL; a validação de Appx, WinGet, diálogos WPF, cleanmgr e configuração do Terminal em uma máquina Windows continua necessária.
