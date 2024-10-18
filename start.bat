@echo off

start "Lancement de VScode" cmd.exe /k "code ."
:: Ouvrir un terminal pour le backend avec un titre spécifique
start "Backend Terminal" cmd.exe /k "cd /d C:\Users\Meno\projetFinance\AssoManage-main\back && node index.js"

:: Ouvrir un autre terminal pour le frontend avec un titre spécifique
start "Frontend Terminal" cmd.exe /k "cd /d C:\Users\Meno\projetFinance\AssoManage-main\front && npm run dev"

:: Attendre 2 secondes
timeout /t 2 /nobreak >nul

:: Ouvrir Google Chrome avec l'URL http://localhost:5173/
start chrome http://localhost:5173/
