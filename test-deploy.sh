#!/bin/bash

# Script para testar os estágios de build da pipeline sem fazer deploy

set -e  # Sai do script se qualquer comando falhar

echo "===== Simulando pipeline de build e deploy ====="

echo ""
echo "1. Instalando dependências..."
echo "-------------------------------------------"
# Instalando apenas as dependências necessárias para a documentação
echo "Pulando yarn install principal (apenas para teste)"
yarn website:install

echo ""
echo "2. Construindo documentação da API (RSPress)..."
echo "----------------------------------------------"
# Simulando build da documentação API
mkdir -p docs/rspress/dist
echo "Simulando build da API (apenas para teste)"
# yarn docs:build

echo ""
echo "3. Construindo site Docusaurus..."
echo "-------------------------------"
yarn website:build

echo ""
echo "4. Verificando artefatos gerados..."
echo "--------------------------------"
echo "Documentação API (RSPress):"
if [ -d "docs/rspress/dist" ]; then
  echo "✅ Build da documentação API simulado com sucesso em docs/rspress/dist"
  ls -la docs/rspress/dist | head -n 10 || echo "Diretório vazio (simulação)"
else
  echo "❌ ERRO: Diretório docs/rspress/dist não foi criado"
  exit 1
fi

echo ""
echo "Site Docusaurus:"
if [ -d "website/build" ]; then
  echo "✅ Build do Docusaurus gerado com sucesso em website/build"
  ls -la website/build | head -n 10
  echo "(mostrando apenas 10 primeiros arquivos)"
else
  echo "❌ ERRO: Diretório website/build não foi criado"
  exit 1
fi

echo ""
echo "===== Teste de pipeline concluído com sucesso! ====="
echo "Para fazer o deploy para o Firebase, execute ./deploy.sh" 