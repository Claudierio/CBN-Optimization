# Ajuste NVIDIA reconstruído

O recurso `optimize-nvidia-settings` configura dois DWORDs públicos no perfil global do driver: energia em **preferir desempenho máximo** (`PREFERRED_PSTATE_ID=0x1057EB71`, valor 1) e filtragem de texturas em **alto desempenho** (`QUALITY_ENHANCEMENTS_ID=0x00CE2691`, valor 20). IDs e enumerações foram conferidos no [cabeçalho oficial NVIDIA NvApiDriverSettings.h](https://github.com/NVIDIA/nvapi/blob/main/NvApiDriverSettings.h). Os dois valores coincidem com as entradas correspondentes do `.nip` recuperado, que contém 92 configurações. A escolha é uma implementação própria; a equivalência integral com o comportamento remoto do aplicativo original permanece desconhecida.

Preferir desempenho máximo pode aumentar o consumo. A opção de filtragem troca qualidade visual por desempenho; ganhos de FPS dependem do jogo, GPU e carga. São mudanças globais e perfis específicos de jogos podem prevalecer. As descrições das opções aparecem na [referência oficial Gerenciar configurações 3D](https://www.nvidia.com/content/Control-Panel-Help/vLatest/en-us/mergedProjects/3D%20Settings/Manage_3D_Settings_(reference).htm). O aplicativo mostra esses efeitos antes da aplicação.

## Integração e restauração

`resources/nvidia-drs.ps1` carrega exclusivamente `nvapi64.dll` do diretório System32 já instalado pelo driver. Não baixa executáveis e não importa o perfil `.nip` recuperado. Inicializa NVAPI, confirma presença de GPU, cria uma sessão DRS e consulta o perfil base. Assinaturas e estruturas seguem [nvapi.h oficial](https://github.com/NVIDIA/nvapi/blob/main/nvapi.h), e os identificadores QueryInterface seguem [nvapi_interface.h oficial](https://github.com/NVIDIA/nvapi/blob/main/nvapi_interface.h).

Cada cópia registra presença, DWORD atual, origem do valor, indicação de valor predefinido e eventual sobrescrita do usuário. A alteração confere que o estado não mudou desde a captura, escreve somente os dois IDs permitidos, salva e reabre a sessão para ler o banco persistido. Conflitos anteriores à primeira escrita usam o marcador explícito `error.noChanges`; o gerenciador pode descartar a cópia sem sobrescrever alterações externas. Na restauração, sobrescritas antigas são regravadas; valores ausentes, herdados ou predefinidos usam `NvAPI_DRS_DeleteProfileSetting`, preservando a ausência de sobrescrita. A comparação após nova leitura inclui valor e origem. O gerenciador de ajustes persiste a cópia antes da escrita e conserva a cópia quando a restauração falha.

O buffer `NVDRS_SETTING_V1` respeita `pack(4)`: nome Unicode de 2048 unidades de 16 bits, campos DWORD e duas uniões de 4100 bytes. Tamanho 12320, versão `sizeof|1<<16 = 0x13020`. A implementação mantém os bytes do nome e dos demais tipos zerados e permite somente `NVDRS_DWORD_TYPE` (0). Não altera configurações desconhecidas, drivers, atualizações ou perfis de aplicativos.

## Validação e limites

Testes em Node com respostas simuladas verificam valores unsigned, ausência/herança, validação da cópia, rejeição de IDs extras, verificação de aplicação/restauração e respostas de erro. A composição de comandos respeita o limite de 11000 caracteres. O layout C foi validado localmente com `gcc` a partir das declarações públicas. Não há PowerShell, compilador C# nem runtime NVIDIA para Windows neste WSL; a compilação Add-Type e a execução NVAPI precisam de validação no Windows com driver NVIDIA instalado. Ausência de GPU/DLL/interface informa indisponibilidade; não registra uma operação como aplicada.

Os avisos de licença das definições NVIDIA estão em `cbn-boost/resources/NVAPI-LICENSE.txt`.
