#!/bin/bash

# Script para configurar os alvos do Firebase Hosting
# Você precisa ter o Firebase CLI instalado e estar logado

# Substitua 'fluid-ds' pelo ID do seu projeto Firebase
PROJECT_ID="fluid-ds"

# Configurar alvos de hosting
firebase target:apply hosting docs $PROJECT_ID
firebase target:apply hosting website $PROJECT_ID-website

echo "Alvos configurados com sucesso!"
echo "Importante: certifique-se de criar e configurar o site $PROJECT_ID-website no console do Firebase." 