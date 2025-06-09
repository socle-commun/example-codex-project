#!/bin/bash
set -e

REPO_URL="https://github.com/socle-commun/example-codex-project.git"
TARGET_DIR=${1:-example-codex-project}

git clone "$REPO_URL" "$TARGET_DIR"
cd "$TARGET_DIR"
rm -rf .git
git init

if [ -f package.json ]; then
  npm install
fi

echo "Template example-codex-project prêt à l'emploi dans $TARGET_DIR"
