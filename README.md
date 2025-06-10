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
- `src/`, `tests/` : code et cibles à abattre.

Tout est minimaliste mais prêt à être étendu par l'agent dès son réveil.

## Structure du Template

Le dépôt sert uniquement de squelette. Consultez [TEMPLATE.md](TEMPLATE.md) pour
la description des dossiers et la marche à suivre.

## Installation

- `npm install`
- `npm run docs:dev` pour lancer un serveur local de documentation
- `npm run docs:build` pour produire `dist/`

Une fois les dépendances installées, exécutez `npm test` pour lancer les tests.
Aucun script de démonstration n'est fourni : rien ne s'exécute tant que l'agent
n'entre pas en action.

## Configuration
Le fichier `config.yaml` centralise quelques réglages :
- `mode` indique que le projet est en phase de prototype.
- `doc_engine` spécifie l'outil **VitePress** utilisé pour générer la documentation.

## Utilisation avec ChatGPT ou Codex

Ce projet est conçu pour être manipulé directement par une IA de type **Codex** (comme ChatGPT, ou un agent externe autonome).

### Mode d'interaction :

1. Lire `AGENTS.md` pour comprendre les règles de comportement.
2. Lire la dernière ligne de `docs/__buffer.md` pour exécuter une directive.
3. Proposer ou effectuer les changements nécessaires dans `src/`, `docs/`, etc.
4. Documenter les actions dans `docs/__buffer.md` (30 lignes max).
5. Utiliser `docs/roadmap.md` pour planifier l'évolution.
6. Lancer `npm test` si des changements importants sont faits.

## Licence

Ce projet est distribué sous licence Creative Commons BY-SA 4.0. Voir le fichier [LICENSE](LICENSE) pour le texte complet.

## Consultation Web

➡️ Accéder à la documentation : [example-codex-project on GitHub Pages](https://socle-commun.github.io/example-codex-project/)
