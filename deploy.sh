#!/bin/bash
# deploy.sh — despliega la web en el servidor
# Uso: ./deploy.sh
# Requiere: Docker y docker compose instalados en el servidor

set -e

echo "→ Construyendo imagen..."
docker compose build

echo "→ Reiniciando contenedor..."
docker compose up -d

echo "→ Limpiando imágenes antiguas..."
docker image prune -f

echo ""
echo "✓ Web desplegada"
echo "  http://localhost"
echo "  http://localhost/infantil"
echo "  http://localhost/juvenil"
echo "  http://localhost/adulto"
echo "  http://localhost/experto"
