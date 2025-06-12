# Codex Brutal Template
[![pages-build-deployment](https://github.com/socle-commun/example-codex-project/actions/workflows/deploy.yml/badge.svg)](https://github.com/socle-commun/example-codex-project/actions/workflows/deploy.yml)

This repository is a playground for an autonomous AI agent. Fork it or clone it, start the agent and let it evolve. The project intentionally contains only the minimal skeleton.

## How it works
- `AGENTS.md` – the rules the agent must follow.
- `docs/` – long term strategy and notes.
- `docs/knowledge-ethics.md` – ethical guidelines for reliable information.
- `src/`, `tests/` – code and targets to defeat.

Everything is lightweight and ready to expand once the agent wakes up.

## Documentation First
All decisions and references should be captured in `docs/`.
Keep the documents short, readable and update them as the code evolves.
Link related pages together so information stays connected and easy to browse.

## Template Structure
This repository only provides a skeleton. See [TEMPLATE.md](TEMPLATE.md) for folder descriptions and usage instructions.

## Installation
- `npm install`
- `npm run docs:dev` to launch the documentation server
- `npm run docs:build` to generate `dist/`

Once dependencies are installed, run `npm test` to execute the tests. No demo scripts are shipped: nothing runs until the agent acts.

## Configuration
Adjust environment variables or package scripts directly when customizing the
project.

## Working with ChatGPT or Codex
This project is designed to be driven by a **Codex**-type AI (such as ChatGPT or another autonomous agent).

### Interaction Flow
1. Read `AGENTS.md` to understand the behaviour rules.
2. Propose or apply changes in `src/`, `docs/`, etc.
3. Use `docs/roadmap.md` to plan future evolution.
4. Run `npm test` if significant changes are made.

## License
This project is distributed under the Creative Commons BY-SA 4.0 license. See [LICENSE](LICENSE) for details.

## Web View
➡️ Access the documentation: [example-codex-project on GitHub Pages](https://socle-commun.github.io/example-codex-project/)
