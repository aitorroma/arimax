#!/bin/bash

# Script para ejecutar Jekyll con el PATH correcto
export PATH="$HOME/.local/share/gem/ruby/3.4.0/bin:$PATH"

# Instalar dependencias si es necesario
if [ ! -d "vendor/bundle" ]; then
    echo "Instalando dependencias..."
    bundle install
fi

# Ejecutar servidor Jekyll
echo "Iniciando servidor Jekyll en http://localhost:4000"
bundle exec jekyll serve --livereload
