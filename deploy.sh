#!/bin/bash

# Script para fazer deploy local do site para o Firebase Hosting

echo "Instalando dependências..."
yarn install
yarn website:install

echo "Construindo o site Docusaurus..."
yarn website:build

echo "Fazendo deploy do site único..."
firebase deploy --only hosting

echo "Deploy concluído!"
echo "Site disponível em: https://fluid-ds.web.app" 