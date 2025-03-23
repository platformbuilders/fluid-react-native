#!/bin/bash

# Script para fazer deploy local dos sites para o Firebase Hosting

echo "Instalando dependências..."
yarn install
yarn website:install

echo "Construindo a documentação da API (RSPress)..."
yarn docs:build

echo "Construindo o site Docusaurus..."
yarn website:build

echo "Fazendo deploy da documentação da API..."
firebase deploy --only hosting:docs

echo "Fazendo deploy do site Docusaurus..."
firebase deploy --only hosting:website

echo "Deploy concluído!"
echo "Documentação API: https://fluid-ds.web.app"
echo "Site Docusaurus: https://fluid-ds-website.web.app" 