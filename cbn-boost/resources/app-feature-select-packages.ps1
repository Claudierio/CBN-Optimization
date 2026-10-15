# A local dialog with an empty initial selection. It never changes applications.
Add-Type -AssemblyName PresentationFramework
$window = New-Object System.Windows.Window
$window.Title = [string]$cbnConfig.title
$window.Width = 650
$window.Height = 540
$window.MinWidth = 480
$window.MinHeight = 350
$window.WindowStartupLocation = 'CenterScreen'
$window.Topmost = $true
$panel = New-Object System.Windows.Controls.DockPanel
$panel.Margin = New-Object System.Windows.Thickness(18)
$text = New-Object System.Windows.Controls.TextBlock
$text.Text = if($cbnConfig.message){[string]$cbnConfig.message}else{'Marque somente os aplicativos que deseja desinstalar da sua conta. Dados locais desses aplicativos podem ser removidos. Nenhum aplicativo esta selecionado inicialmente.'}
$text.TextWrapping = 'Wrap'
$text.Margin = New-Object System.Windows.Thickness(0,0,0,16)
[System.Windows.Controls.DockPanel]::SetDock($text, 'Top')
[void]$panel.Children.Add($text)
$buttons = New-Object System.Windows.Controls.StackPanel
$buttons.Orientation = 'Horizontal'
$buttons.HorizontalAlignment = 'Right'
$buttons.Margin = New-Object System.Windows.Thickness(0,12,0,0)
[System.Windows.Controls.DockPanel]::SetDock($buttons, 'Bottom')
$cancel = New-Object System.Windows.Controls.Button
$cancel.Content = 'Cancelar'
$cancel.Width = 100
$cancel.IsCancel = $true
$cancel.Margin = New-Object System.Windows.Thickness(0,0,10,0)
$accept = New-Object System.Windows.Controls.Button
$accept.Content = 'Continuar'
$accept.Width = 100
[void]$buttons.Children.Add($cancel)
[void]$buttons.Children.Add($accept)
[void]$panel.Children.Add($buttons)
$scroll = New-Object System.Windows.Controls.ScrollViewer
$list = New-Object System.Windows.Controls.StackPanel
$checks = @()
foreach ($item in @($cbnConfig.packages)) {
    $check = New-Object System.Windows.Controls.CheckBox
    $check.Content = if($item.packageName){([string]$item.name + '  (' + [string]$item.packageName + ')')}else{[string]$item.name}
    $check.Tag = [string]$item.id
    $check.IsChecked = $false
    $check.Margin = New-Object System.Windows.Thickness(0,0,0,12)
    [void]$list.Children.Add($check)
    $checks += $check
}
$scroll.Content = $list
[void]$panel.Children.Add($scroll)
$window.Content = $panel
$accept.Add_Click({ $window.DialogResult = $true; $window.Close() })
$cancel.Add_Click({ $window.DialogResult = $false; $window.Close() })
if ($window.ShowDialog() -ne $true) { throw 'Operacao cancelada.' }
$selected = @($checks | Where-Object { $_.IsChecked -eq $true } | ForEach-Object { [string]$_.Tag })
ConvertTo-Json -InputObject $selected -Compress
