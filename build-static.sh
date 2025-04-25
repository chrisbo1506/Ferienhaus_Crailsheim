#!/bin/bash

# Build nur das Frontend (keine Server-Komponenten)
echo "Building static site..."
npm run check
vite build

# Erstelle eine leere _redirects-Datei für SPA-Routing
echo "/* /index.html 200" > dist/_redirects

echo "Static build completed."