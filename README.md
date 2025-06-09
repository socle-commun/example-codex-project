# Template Codex Brutal
[![pages-build-deployment](https://github.com/socle-commun/example-codex-project/actions/workflows/deploy.yml/badge.svg)](https://github.com/socle-commun/example-codex-project/actions/workflows/deploy.yml)

Ce dépôt sert de champ d'entraînement pour un agent IA autonome.
Forke-le sur GitHub (ou clones-le), lance l'agent, puis laisse-le evoluer.
Ce dépôt est volontairement vide : il ne contient que la structure minimale.

## Mode opératoire
- `AGENTS.md` : la loi que l'agent suit à la lettre.
- `docs/__buffer.md` : trace condensée des actions, dernière ligne = prochaine directive.
- `docs/` : stratégie et mémoire longue.
- `docs/knowledge-ethics.md` : principes éthiques pour garantir la fiabilité des informations.
- `src/`, `data/`, `tests/` : code, munitions et cibles à abattre.

Tout est minimaliste mais prêt à être étendu par l'agent dès son réveil.

## Structure du Template

Le dépôt sert uniquement de squelette. Consultez [TEMPLATE.md](TEMPLATE.md) pour
la description des dossiers et la marche à suivre.

## Installation

- `npm install`
- `npm run dev-docs` pour lancer un serveur local de documentation
- `npm run build-docs` pour produire `dist/`

Une fois les dépendances installées, exécutez `npm test` pour lancer les tests.
Aucun script de démonstration n'est fourni : rien ne s'exécute tant que l'agent
n'entre pas en action.

## Configuration
Le fichier `config.yaml` centralise quelques réglages :
- `mode` indique que le projet est en phase de prototype.
- `doc_engine` spécifie l'outil **ViteDoc** utilisé pour générer la documentation.

## Licence

Ce projet est distribué sous licence Creative Commons BY-SA 4.0. Voir le fichier [LICENSE](LICENSE) pour le texte complet.

## Consultation Web

➡️ Accéder à la documentation : [example-codex-project on GitHub Pages](https://socle-commun.github.io/example-codex-project/)
