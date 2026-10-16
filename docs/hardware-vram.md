# Correção da memória de vídeo

A captura `dist/captura.png` mostrou a GeForce RTX 5060 exibida com 4.00 GB,
embora o modelo tenha 8 GB. A causa era `Win32_VideoController.AdapterRAM`:
a documentação do WMI define essa propriedade como `uint32` em bytes, que não
consegue representar capacidades acima de 4 GiB.

A consulta de hardware agora enumera os adaptadores com DXGI e lê
`DXGI_ADAPTER_DESC.DedicatedVideoMemory`, cujo tipo `SIZE_T` tem 64 bits no
runtime Windows x64. O nome DXGI é associado ao primeiro controlador WMI antes
de usar a capacidade. Se DXGI não encontrar a placa, o valor legado só é usado
quando não chegou ao limite de `uint32`; valor saturado resulta em memória
indeterminada (0) em vez de exibir um número enganoso.

Referências oficiais:

- [Win32_VideoController.AdapterRAM (Microsoft Learn)](https://learn.microsoft.com/en-us/windows/win32/cimwin32prov/win32-videocontroller) declara `uint32` e unidades em bytes.
- [DXGI_ADAPTER_DESC (Microsoft Learn)](https://learn.microsoft.com/en-us/windows/win32/api/dxgi/ns-dxgi-dxgi_adapter_desc) define `DedicatedVideoMemory` como `SIZE_T`.
- [IDXGIFactory::EnumAdapters (Microsoft Learn)](https://learn.microsoft.com/en-us/windows/win32/api/dxgi/nf-dxgi-idxgifactory-enumadapters) documenta a enumeração dos adaptadores.

O teste de regressão injeta uma resposta JSON de 8 GiB e verifica que o código
executa o caminho DXGI e não usa diretamente o campo WMI saturado para o painel.
O script PowerShell/C# e a leitura do driver precisam ser confirmados no Windows;
este host WSL não tem DXGI nem a placa de vídeo do usuário.
