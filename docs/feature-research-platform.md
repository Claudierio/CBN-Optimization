# Pesquisa de funcionalidades da plataforma Windows

Pesquisa em 14/10/2026. Este documento fundamenta a reconstrução de seis recursos cujos scripts não vieram no instalador. As propostas abaixo são implementação própria do CBN Boost. Documentação pública não recupera o algoritmo do produto original nem demonstra ganho de FPS em uma máquina específica. A execução e a reversão precisam ser verificadas no Windows.

## `disable-location-tracking`

O procedimento publicado pela Microsoft para a política de localização do dispositivo é `REG_DWORD DisableLocation=1` em `HKLM\SOFTWARE\Policies\Microsoft\Windows\LocationAndSensors`. A política bloqueia o uso do recurso de localização; não se deve confundir isso com apagar histórico. [Microsoft: gerenciamento de conexões, seção 18.2](https://learn.microsoft.com/en-gb/windows/privacy/manage-connections-from-windows-operating-system-components-to-microsoft-services#182-location).

A política `System/AllowLocation` mapeia esse valor de Registro. A tabela de suporte identifica Windows 10 ou posterior nas edições Pro, Enterprise, Education e IoT Enterprise; Home não aparece nessa tabela. O contrato do aplicativo deve oferecer encaminhamento às Configurações quando a edição não tiver suporte documentado, sem apresentar a mera existência de um DWORD como comprovação de funcionamento da política. [Microsoft: System/AllowLocation](https://learn.microsoft.com/en-us/windows/client-management/mdm/policy-csp-system#allowlocation).

Proposta de aplicação:

1. Capturar existência da chave, existência do valor, tipo e conteúdo antes da escrita; persistir o snapshot antes de alterar o Registro.
2. Criar a chave, se necessário, e escrever apenas `DisableLocation` como DWORD 1. Usar a visualização de Registro de 64 bits no aplicativo x64.
3. Relê-lo e verificar tipo DWORD e valor 1. Mostrar ao usuário que se trata da política de localização configurada, com reinício caso o Windows ainda não reflita a configuração.
4. Para desfazer, restaurar o conteúdo e o tipo originais; remover somente o valor se ele não existia. Remover a chave criada pelo app apenas se estiver vazia. Não substituir ausência por DWORD 0.

Encaminhamento documentado: `ms-settings:privacy-location`. [Microsoft: URIs das Configurações](https://learn.microsoft.com/en-us/windows/apps/develop/launch/launch-settings#privacy).

## `disable-wifi-sense`

O recurso de conexão a hotspots abertos sugeridos foi removido das Configurações no Windows 10 1803. Em Windows moderno, a opção deve ficar identificada como obsoleta/inaplicável, sem escrever chaves legadas e anunciar que uma otimização foi aplicada. [Microsoft: funcionalidades removidas](https://learn.microsoft.com/windows/whats-new/removed-features).

A documentação histórica apresenta `HKLM\SOFTWARE\Microsoft\WcmSvc\wifinetworkmanager\config\AutoConnectAllowedOEM=0` apenas para versões anteriores a Windows 10 1511. Para 1511 em diante, documenta a política WLAN correspondente, e não afirma que a chave antiga continue sendo o procedimento válido. Não há razão para oferecer esse ajuste legado no alvo Windows 10/11 atual. [Microsoft: configuração histórica de Wi-Fi Sense](https://learn.microsoft.com/en-us/troubleshoot/windows-client/networking/configure-wifi-sense-and-paid-wifi-service).

## `enable-optimization-for-windowed-games`

A Microsoft documenta o recurso no Windows 11, para jogos DirectX 10/11 em janela ou janela sem bordas compatíveis. O procedimento é Configurações > Sistema > Tela > Gráficos > Configurações padrão > Otimizações para jogos em janela. Deve-se reiniciar o jogo. Auto HDR pode ativar a otimização automaticamente. [Microsoft: otimizações para jogos em janela](https://support.microsoft.com/en-au/windows/hardware/display-graphics/optimizations-for-windowed-games-in-windows-11).

O lançamento público foi incluído no Windows 11 2022 Update. O CBN exige Windows 11 22H2 ou posterior (build 22621+) para oferecer essa ação, sem considerar a versão inicial de Windows 11 como garantia de disponibilidade do controle. [Microsoft: recursos do Windows 11 2022 Update](https://blogs.windows.com/windowsexperience/2022/10/12/11-tips-to-get-the-most-out-of-windows-11/).

Não foi encontrada documentação primária da Microsoft que estabeleça `UserGpuPreferences/SwapEffectUpgradeEnable` como API pública para essa alteração. Proposta: oferecer um botão que abra `ms-settings:display-advancedgraphics-default`, com alternativa `ms-settings:display-advancedgraphics`, em Windows 11 e dispositivos compatíveis. Essas URIs são documentadas. [Microsoft: URIs de gráficos](https://learn.microsoft.com/en-us/windows/apps/develop/launch/launch-settings#system).

O resultado dessa ação deve ser `openedSettings: true`, `applied: null` e não marcar um toggle como ligado. Verificação e reversão ficam no controle nativo visível do Windows. Abrir Configurações não comprova que o usuário habilitou a função.

## `optimize-network-settings`

O escopo adotado nesta reconstrução é habilitar RSS global. `Set-NetOffloadGlobalSetting -ReceiveSideScaling Enabled` controla RSS global, que distribui processamento entre núcleos; o comando não comprova suporte de cada adaptador. Não é necessário alterar RSC, Chimney ou TaskOffload junto. [Microsoft: Set-NetOffloadGlobalSetting](https://learn.microsoft.com/en-us/powershell/module/nettcpip/set-netoffloadglobalsetting?view=windowsserver2025-ps).

A Microsoft publica leitura por `Get-NetTCPSetting | Select-Object SettingName,AutoTuningLevelLocal` e alteração por `Set-NetTCPSetting -AutoTuningLevelLocal Normal`. A documentação de ajuste de NIC também publica a alternativa `netsh interface tcp set global autotuninglevel=normal`. Essa página trata de Windows Server, portanto deve fundamentar o significado do ajuste e não uma promessa de resultado em jogos no cliente. [Microsoft: ajuste de NIC e autotuning](https://learn.microsoft.com/en-ca/windows-server/networking/technologies/network-subsystem/net-sub-performance-tuning-nics#review-and-configure-tcp-receive-window-autotuning-level).

Transação RSS proposta:

1. Verificar disponibilidade dos cmdlets, ler `Get-NetOffloadGlobalSetting` e persistir RSS anterior, aceitando somente `Enabled` ou `Disabled`.
2. Aplicar somente RSS global. Não usar opções como congestion provider, ACK, MTU, timestamps ou reset de pilha indiscriminado.
3. Reler RSS, que deve ser `Enabled`; o status global não deve ser mostrado como prova de benchmark ou como configuração individual de cada NIC.
4. Para desfazer, definir o valor salvo por `Set-NetOffloadGlobalSetting -ReceiveSideScaling <valor>` e verificar leitura independente. Manter o snapshot se houver falha.

Autotuning foi pesquisado, mas fica fora desta versão: a referência de `Set-NetTCPSetting` limita alterações de alguns campos no Windows 10 e sua descrição de `SettingName` menciona somente templates Custom, enquanto a página de ajuste mostra alterações sem `SettingName`. A reversão por template exige validação no Windows real; o app não deve assumir que todo objeto lido é gravável. `Normal` é um nível de crescimento de janela, e não uma opção de redução universal de latência. [Microsoft: Set-NetTCPSetting](https://learn.microsoft.com/en-us/powershell/module/nettcpip/set-nettcpsetting?view=windowsserver2025-ps).

## `set-services-to-manual`

O procedimento suportado é `Set-Service -Name <nome> -StartupType Manual`, com privilégios de administrador. Manual permite início sob demanda por usuário ou aplicativo; não equivale a manter o serviço parado. [Microsoft: Set-Service](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/set-service?view=powershell-7.5).

Proposta de produto: lista pequena de serviços opcionais encontrados no sistema, por exemplo `MapsBroker`, `Fax` e `RetailDemo`, com seleção explícita e descrição do recurso afetado. Não incluir serviços de rede, áudio, Windows Update, Defender ou autenticação/jogos Xbox em uma ação genérica. A orientação Microsoft explica que os modos padrão já equilibram função e desempenho e que desabilitar serviços pode interromper funcionalidades; sua lista publicada é para Server 2016, não uma recomendação universal para Windows 11. [Microsoft: orientação sobre serviços](https://learn.microsoft.com/en-US/windows-server/security/windows-services/security-guidelines-for-disabling-system-services-in-windows-server).

Para cada serviço selecionado:

1. Capturar `Name`, `StartMode` e `State` por `Win32_Service`, além de existência/tipo/valor de `DelayedAutoStart` no Registro do serviço. Rejeitar estado transitório ou pausado, ou tratá-lo de forma explícita.
2. Alterar somente inicialização para Manual. Não parar nem iniciar um serviço em execução; não usar `Stop-Service` nesta função.
3. Verificar `StartMode=Manual` e reler estado atual para diagnóstico. O aplicativo não alterou o estado de execução, portanto não deve reiniciar ou parar o serviço só porque outro agente ou aplicativo mudou seu estado durante o uso.
4. Restaurar modo original via SCM. Preservar DelayedAutoStart, incluindo sua ausência original. Releitura de `State` serve para confirmar que o CBN não efetuou uma mudança de execução e registrar o estado atual.

Para restaurar início automático atrasado no Windows PowerShell 5.1, a alternativa nativa documentada é `sc.exe config <nome> start= delayed-auto`. Os outros valores relevantes são `auto`, `demand` e `disabled`. A CLI exige um espaço entre `start=` e o valor; verificar `$LASTEXITCODE` e fazer leitura independente do resultado. [Microsoft: sc.exe config](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/sc-config).

## `disable-defender-rtp`

`Set-MpPreference -DisableRealtimeMonitoring $true` solicita desligar a proteção em tempo real; `$false` solicita religar. A Microsoft recomenda mantê-la ligada. O app deve deixar essa opção fora da aplicação em lote recomendada e pedir confirmação específica explicando que arquivos abertos e baixados deixam de receber essa verificação enquanto a proteção estiver desligada. [Microsoft: Set-MpPreference](https://learn.microsoft.com/en-us/powershell/module/defender/set-mppreference?view=windowsserver2025-ps).

Proposta de implementação:

1. Verificar disponibilidade dos cmdlets, estado de Defender e `IsTamperProtected`. Se proteção contra adulteração estiver ativa ou o estado for desconhecido, informar bloqueio e não tentar bypass.
2. Capturar `DisableRealtimeMonitoring` por `Get-MpPreference` e estado efetivo por `Get-MpComputerStatus` antes da alteração; persistir snapshot.
3. Executar a solicitação, esperar brevemente e reler ambos. Só concluir aplicado quando a preferência for verdadeira e `RealTimeProtectionEnabled` for falso. A ausência de erro no cmdlet não basta.
4. Restaurar exatamente a preferência anterior e verificar novamente o estado efetivo; não fazer mudanças em exclusões, Tamper Protection, serviços, tarefas ou políticas gerenciadas.

O estado efetivo pode ser consultado por `Get-MpComputerStatus`, que apresenta `AMRunningMode`, `AMServiceEnabled` e `RealTimeProtectionEnabled`. Se Defender estiver ausente ou em modo passivo, não contar seu estado preexistente como uma alteração efetuada pelo CBN. [Microsoft: Get-MpComputerStatus](https://learn.microsoft.com/en-us/powershell/module/defender/get-mpcomputerstatus?view=windowsserver2025-ps).

A proteção contra adulteração pode bloquear alterações que aparentam ter sucesso; ela mantém a proteção em tempo real ativa. Isso deve resultar em erro verificável e toggle restaurado no CBN, não em uma tentativa de contornar a proteção. [Microsoft: Tamper Protection](https://learn.microsoft.com/en-us/defender-endpoint/tamper-protection-overview#tamper-protection-modes-on-windows-devices).

A desativação é temporária: o Windows pode religar a proteção depois de um intervalo curto. A interface deve reler o estado, sem prometer desativação permanente e sem criar tarefas para impedir a reativação. [Microsoft: proteção contra vírus e ameaças](https://support.microsoft.com/en-gb/windows/security/threat-malware-protection/virus-and-threat-protection-in-the-windows-security-app).
