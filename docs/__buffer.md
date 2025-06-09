# Règles Temporaires
- Pas d'horodatage; directives courtes.
- Historique limité à 30 lignes.

## Mémoire Active
- Journal reinitialise pour memoire active.
- Structure stricte appliquee.
- AGENTS.md mis a jour pour documenter ce role.
- Regle NEXT supprimee, memoire plus neutre.

- Dossier site supprime, config ViteDoc deplacee dans docs, scripts ajustes.
- Ajout d'une batterie de tests pour la generation de la documentation.
- Regle ajoutee : executer `npm install` puis `npm test` pour valider.
- TEMPLATE.md nettoye; dossier site retire de la doc.
- docsDir mis a jour pour ne compiler que le dossier docs.
- log.md renomme en docs/__buffer.md; config et docs actualises.
- DevDependency vite fixe a 4.4.9, CI utilise `npm ci`,
  tentative `npm install` echouee faute de reseau.
- Ajout d'un fichier `vitedoc.md` pour expliquer la generation de la doc.
- Ajout de `vitedoc` dans package.json et scripts mis a jour.
- Workflow test ajoute pour npm ci et npm test sur PR.
- Ajout du fichier .nvmrc pour Node 20.
- Champ engines ajoute dans package.json.
- Ajout du fichier docs/roadmap.md avec les objectifs a court, moyen et long terme.
- docs/index.md mis a jour pour lier vers ce nouveau roadmap.
