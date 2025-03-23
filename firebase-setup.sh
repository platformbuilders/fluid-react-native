#!/bin/bash

# Script para configurar o alvo de hosting no Firebase

echo "Configurando alvo 'fluid-ds' para o projeto Firebase..."
firebase target:apply hosting fluid-ds fluid-ds

echo "Configuração de alvos concluída!"
echo "Agora você pode executar './deploy.sh' para fazer o deploy do site." 