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
echo "2. Construindo site Docusaurus..."
echo "-------------------------------"
yarn website:build

echo ""
echo "3. Verificando artefatos gerados..."
echo "--------------------------------"
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