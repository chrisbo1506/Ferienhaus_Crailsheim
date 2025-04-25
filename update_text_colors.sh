#!/bin/bash

# Ersetze alle Farbstile in TSX-Dateien
find client/src -type f -name "*.tsx" -exec sed -i 's/style={{ color: .#606C38. }}/style={{ color: "#4A4A4A" }}/g' {} \;
find client/src -type f -name "*.tsx" -exec sed -i 's/style={{ color: "#606C38"/style={{ color: "#4A4A4A"/g' {} \;

echo "Textfarben wurden auf Grau (#4A4A4A) geändert"