# Proveniência e avisos de terceiros

O projeto contém interface JavaScript/CSS compilada e metadados recuperados do
instalador TogsBoost fornecido pelo usuário. Esses arquivos foram formatados e
modificados para CBN Boost. A licença original está preservada integralmente em
`LICENSE.original.txt`; a reconstrução não concede novos direitos sobre esse
material nem o declara como software de código aberto.

`main/*.cjs`, `resources/registry-engine.ps1`, scripts de extração/empacotamento,
testes e a marca CBN Boost são implementação nova criada nesta reconstrução.
O backend Bytenode original, seus módulos nativos e as integrações de ativação,
servidor, atualização e telemetria não integram o aplicativo entregue.

O bundle recuperado contém bibliotecas de terceiros. Seus comentários de licença
foram mantidos; avisos recuperados dos pacotes correspondentes estão em
`licenses/`. Essa lista documenta o material identificado estaticamente; os
fontes de desenvolvimento e mapas originais não estavam no instalador.

O pacote Windows reutiliza o runtime Electron distribuído no instalador.
`LICENSE.electron.txt` e `LICENSES.chromium.html` acompanham o executável.
O runtime declara Electron 38.0.0 em strings embutidas; sua execução e versão
efetiva ainda precisam ser confirmadas no Windows.

O aviso MIT de React foi obtido da fonte oficial, pois o instalador trazia seus
comentários mas não o arquivo de licença do pacote: https://github.com/facebook/react/blob/main/LICENSE.

A integração com o driver NVIDIA usa definições de ABI e constantes do SDK
NVAPI oficial. O aviso correspondente está em `resources/NVAPI-LICENSE.txt`;
a biblioteca nvapi64.dll é fornecida pelo driver instalado e não é redistribuída
pelo projeto. A implementação local modifica somente dois ajustes públicos.
