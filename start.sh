#!/bin/bash

echo "==> Installation des dépendances pour le backend..."
cd backend || exit
npm install

echo "==> Installation des dépendances pour le frontend..."
cd ../frontend || exit
npm install

echo "==> Démarrage des serveurs..."
cd ../backend || exit
npx concurrently --kill-others "npm start" "cd ../frontend && npm start"
