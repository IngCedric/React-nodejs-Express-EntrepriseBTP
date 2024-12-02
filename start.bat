@echo off

echo Installation des dépendances pour le backend...
cd backend
npm install

echo Installation des dépendances pour le frontend...
cd ../frontend
npm install

echo Démarrage des serveurs...
cd ../backend
npx concurrently --kill-others "npm start" "cd ../frontend && npm start"
