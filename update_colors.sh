#!/bin/bash

# Ändere alle Vorkommen von #8B4513 (Braun) zu #606C38 (Olivgrün)
find client/src -type f -name "*.tsx" -exec sed -i 's/#8B4513/#606C38/g' {} \;

# In den Style-Angaben, wo die Farbe in Style-Tags verwendet wird
find client/src -type f -name "*.tsx" -exec sed -i 's/style={{ backgroundColor: .rgba(255, 255, 255, 0.75)., color: .#8B4513. }}/style={{ backgroundColor: "rgba(255, 255, 255, 0.75)", color: "#606C38" }}/g' {} \;

echo "Farbänderung abgeschlossen"