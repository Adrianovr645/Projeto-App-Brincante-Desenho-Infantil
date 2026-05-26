# Script de Publicação para o GitHub
# Este script conecta seu repositório local ao remoto e faz o push inicial.

Write-Host "Iniciando processo de publicação no GitHub..." -ForegroundColor Cyan

# 1. Adicionar o repositório remoto (ignora erro se já existir)
git remote add origin https://github.com/Adrianovr645/Projeto-App-Brincante-Desenho-Infantil.git 2>$null

# 2. Renomear branch principal para main (padrão moderno)
git branch -M main

# 3. Fazer o envio do código para a nuvem
Write-Host "Enviando os arquivos para o GitHub..." -ForegroundColor Yellow
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "Publicação concluída com sucesso! 🚀" -ForegroundColor Green
    Write-Host "Verifique em: https://github.com/Adrianovr645/Projeto-App-Brincante-Desenho-Infantil" -ForegroundColor Green
} else {
    Write-Host "Erro durante a publicação. Verifique suas credenciais do GitHub ou se o repositório já contém arquivos." -ForegroundColor Red
}
