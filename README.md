# FOOTBALL-BENIN-CAN-2025-API

API RESTful pour les statistiques des joueurs de l'équipe du Bénin - Qualifications Coupe d'Afrique 2025

##  Fonctionnalités

- Statistiques détaillées pour 24 joueurs de l'équipe nationale
- Recherche de joueurs par poste, minutes jouées et indicateurs de performance
- Aperçu de l'équipe, meilleurs joueurs et résumés statistiques
- Endpoints d'API clairs avec codes de statut HTTP appropriés
- Validation robuste des entrées et gestion des erreurs
-  Récupération efficace des données avec support de la pagination

##  Prérequis

- Node.js (version 14 ou supérieure)
- npm

  
##  Endpoints de l'API


- GET /api/players - Obtenir tous les joueurs (avec pagination)

- GET /api/players/:id - Obtenir un joueur spécifique par ID

- GET /api/players/position/:pos - Obtenir les joueurs par poste (GK, DF, MF, FW)

- GET /api/players/minutes/:min - Obtenir les joueurs avec un minimum de minutes jouées

- GET /api/players/search/:name - Rechercher des joueurs par nom

