# Recursos adicionados no CBN Boost 1.1

Os 13 itens antes indisponíveis foram pesquisados em fontes primárias. Doze
receberam implementação própria; Wi-Fi Sense continua identificado como
obsoleto. O catálogo tem 28 recursos implementados: 22 ajustes reversíveis e
6 ações. Disponibilidade de módulos, permissões, drivers e edição do Windows
é verificada ao executar cada operação.

| Item | Implementação | Restauração |
| --- | --- | --- |
| Remoção seletiva / debloat | Seleção de até 18 aplicativos opcionais Appx da conta atual; nenhuma seleção inicial | Reinstalação manual pela Store; sem toggle persistente |
| Copilot | Remoção explícita do aplicativo consumidor Microsoft.Copilot; não altera Edge/Microsoft 365 | Reinstalação manual |
| Defender em tempo real | Preferência oficial, com confirmação e verificação do estado efetivo; recusa Tamper Protection/políticas | Preferência e estado anteriores verificados; Windows pode reativar automaticamente |
| Localização | Política DisableLocation na edição Pro/Enterprise/Education/IoT compatível; só localização | Valor/tipo anteriores ou ausência |
| Wi-Fi Sense | Recurso removido das versões atuais; nenhuma alteração necessária | Não se aplica |
| Jogos em janela | Abre a página gráfica do Windows 11 22H2+; usuário escolhe a opção compatível | Gerenciada no Windows; abrir página não aplica o ajuste |
| Rede | Ativa somente RSS global; mantém MTU, DNS e demais parâmetros TCP | Valor de RSS anterior |
| NVIDIA | Dois ajustes públicos via NVAPI: desempenho máximo e texturas em alto desempenho; requer driver/GPU | Overrides, valores herdados ou padrões anteriores |
| Xbox/Game Bar | Seleção entre quatro pacotes opcionais, somente na conta atual | Reinstalação manual; Gaming Services e jogos preservados |
| OneDrive | Desinstala somente o cliente reconhecido pelo WinGet; não apaga arquivos/pastas | Reinstalação manual; arquivos somente online precisam ser baixados antes |
| Limpeza de Disco | Abre cleanmgr interativo para o usuário selecionar e confirmar categorias | Limpeza permanente; não informa bytes fictícios |
| PowerShell 7 padrão | Instala versão estável se necessário e cria perfil próprio no Windows Terminal | Restaura defaultProfile anterior e remove somente perfil próprio intacto; mantém PowerShell instalado |
| Serviços manuais | Seleção de Fax, mapas baixados e demonstração de loja; não para serviços em execução | Tipo de início e DelayedAutoStart anteriores, inclusive ausência |

As ações sem restauração automática usam botões **Executar** ou **Abrir**,
não ficam marcadas como ajustes ativos e não produzem cópias de reversão falsas.
O resumo exibido informa o que foi confirmado. Remoções parciais são informadas.
Seleções de aplicativos e serviços começam vazias.

Para ajustes reversíveis, o gerenciador persiste a cópia antes de alterar as
configurações e tenta rollback quando há falha parcial. Conflitos detectados
antes da primeira escrita são recusados sem sobrescrever alterações externas.
As cópias permanecem em `%APPDATA%\CBN Boost\tweak-snapshots.json` e as cópias
do Terminal em `%APPDATA%\CBN Boost\feature-backups\`.

Essas funções são implementações novas baseadas em documentação pública,
com alcance explícito; não recuperam os scripts do servidor original. Também
não comprovam ganho de FPS. Limitações por pacote, driver e versão continuam
dependentes de validação real no Windows.

Pesquisa e referências primárias:
[plataforma Windows](feature-research-platform.md),
[aplicativos e Terminal](feature-research-apps.md),
[NVIDIA](feature-research-nvidia.md).

Referências centrais:
[Appx](https://learn.microsoft.com/en-us/powershell/module/appx/remove-appxpackage),
[Defender](https://learn.microsoft.com/en-us/defender-endpoint/tamper-protection-overview),
[RSS](https://learn.microsoft.com/en-us/powershell/module/nettcpip/set-netoffloadglobalsetting),
[NVIDIA NVAPI](https://github.com/NVIDIA/nvapi),
[jogos em janela](https://support.microsoft.com/en-us/windows/hardware/display-graphics/optimizations-for-windowed-games-in-windows-11),
[recursos removidos](https://learn.microsoft.com/en-us/windows/whats-new/removed-features).
