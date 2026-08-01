$clientId = Read-Host "Yandex ClientID"
$secret = Read-Host "Yandex Client secret" -AsSecureString
$code = Read-Host "Yandex verification code" -AsSecureString

$secretPointer = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($secret)
$codePointer = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($code)
try {
    $response = Invoke-RestMethod -Method Post `
        -Uri "https://oauth.yandex.ru/token" `
        -ContentType "application/x-www-form-urlencoded" `
        -Body @{
            grant_type = "authorization_code"
            client_id = $clientId
            client_secret = [Runtime.InteropServices.Marshal]::PtrToStringBSTR($secretPointer)
            code = [Runtime.InteropServices.Marshal]::PtrToStringBSTR($codePointer)
        }
}
finally {
    [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($secretPointer)
    [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($codePointer)
}

$tokenDirectory = Join-Path $env:LOCALAPPDATA "ComplexMedia"
$tokenFile = Join-Path $tokenDirectory "yandex-oauth-token.txt"
New-Item -ItemType Directory -Force -Path $tokenDirectory | Out-Null
Set-Content -LiteralPath $tokenFile -Value $response.access_token -NoNewline

$acl = New-Object System.Security.AccessControl.FileSecurity
$acl.SetAccessRuleProtection($true, $false)
$rule = New-Object System.Security.AccessControl.FileSystemAccessRule(
    [Security.Principal.WindowsIdentity]::GetCurrent().Name,
    "FullControl",
    "Allow"
)
$acl.AddAccessRule($rule)
Set-Acl -LiteralPath $tokenFile -AclObject $acl

Write-Output "Token saved: $tokenFile"
