# Utilisation du buffer

Le fichier `docs/__buffer.md` sert de **mémoire active** pour l'agent. Il ne doit pas devenir un journal de bord.

## Règles principales
- Limiter le contenu à 30 lignes (hors commentaires).
- Chaque ligne résume une directive potentiellement temporaire.
- Supprimer les notes transférées dans la documentation.

## Exemple minimal

```md
- Vérifie avec attention le AGENTS.md et propose des évolutions.
- Le readme.md est en cours de finalisation.
- Utilise la librairie globale de tests.
```

Conservez uniquement ces notes éphémères qui orientent l'étape à venir.

Régulièrement, nettoyer ce fichier et soit:
- Antériner les règles dans une documentation dédiée
- Supprimer la règle