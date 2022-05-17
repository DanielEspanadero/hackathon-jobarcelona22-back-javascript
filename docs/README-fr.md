# 👨🏻‍💻 JOBarcelona '22 | Back-end 👨🏻‍💻

_Ce package a été développé à partir de zéro par [Daniel Españadero](https://github.com/DanielEspanadero)._

_Il s'agit de l'un des défis qualificatifs du [JOBarcelona '22 hackathon en ligne](https://nuwe.io/challenge/jobarcelona-'22-back-end). Le résultat de ce challenge permettra aux gagnants d'assister au hackathon en présentiel qui aura lieu le 31 mai 2022 au Camp Nou._

_Le code pour déchiffrer le mot de passe se trouve dans le chemin `src/helpers/password-pdf.js` 😉_

## Traductions 💬

_Ce fichier README est également disponible dans d'autres langues :_
- [Catalan](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/README-cat.md)
- [Anglais](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/README.md)
- [Allemand](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/README-de.md)
- [Italien](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/README-it.md)
- [Portugais](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/README-pt.md)
- [Espagnol](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/README-es.md)
- [Suédois](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/README-se.md)

## Objectifs
_`JOBarcelona '22` a été créé pour répondre aux besoins spécifiques suivants :_

_✅ Tâche 1 → Se connecter au port : 3030 - TERMINÉ_

_✅ Tâche 2 → Les variables d'environnement ne doivent pas être téléchargées sur github, mais il doit y avoir un modèle qui permet de savoir lesquelles sont nécessaires. - TERMINÉ_

_✅ Tâche 3 → Les routes d'authentification doivent permettre aux utilisateurs de s'inscrire et de se connecter : Une route pour l'enregistrement/l'inscription, Une route pour la connexion/la connexion. - TERMINÉ_

_✅ Tâche 4 → La route de connexion et la route d'enregistrement doivent envoyer le jeton pour pouvoir accéder aux autres routes. - TERMINÉ_

_✅ Tâche 5 → De plus, une route est nécessaire qui renvoie la liste complète des utilisateurs afin qu'ils puissent contrôler la croissance depuis le backoffice JOBX. Cette route doit être protégée et l'accès ne sera accordé qu'à un utilisateur ayant le rôle d'administrateur et avec les informations d'identification chiffrées dans le document : route : /users. - TERMINÉ_

_✅ Tâche 6 → Un utilisateur a comme paramètres obligatoires : nom d'utilisateur (doit être unique), email (doit suivre le modèle d'email et être unique), mot de passe (doit avoir un minimum de 8 caractères, inclure une majuscule et un chiffre). - TERMINÉ_

_✅ TÂCHE SUPPLÉMENTAIRE → Crackez le mot de passe PDF - TERMINÉ_

## Démarrage 🚀

_Ces instructions vous permettront d'obtenir une copie de travail du projet sur votre machine locale à des fins de développement et de test._

### Prérequis 📋

_Pour que le projet fonctionne correctement, il est recommandé d'avoir une série de programmes installés et configurés correctement :_
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js et npm](https://nodejs.org/es/)
- [MongoDB](https://docs.mongodb.com/manual/installation/)

###Installation 🔧

_Lorsque vous avez cloné ce projet dans votre dépôt local, n'oubliez pas d'exécuter la commande suivante dans le terminal pour installer les dépendances et que tout fonctionne correctement :_
```
installation npm
```

### Variables d'environnement .env 🪛

_Pour que le projet fonctionne correctement, vous devez activer les variables d'environnement, pour cela, vous devez créer un fichier avec le nom .env et entrer les données que vous avez dans le modèle .config.env_

![Démo](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/env.png)

## Commandes à exécuter ⌨️

⚠️ AVANT DE COMMENCER, PENSEZ A AVOIR DEMARRE LE SERVEUR MOGODB ⚠️

_Une fois tous les programmes et dépendances nécessaires installés, lancez simplement la commande :_
```
début npm
```
_Ou vous pouvez également entrer la commande pour la version de développement._
```
npm run dev
```

## quand ça commence 🤔
_Lorsque l'application démarre, elle fera le calcul pour déchiffrer la clé PDF, elle démarrera le serveur et les utilisateurs dans la base de données et elle créera l'utilisateur avec le rôle d'administrateur, qui aura les identifiants suivants :_
```
{
    "nom d'utilisateur": "jobx_admin",
    "courriel": "admin@jobx.com",
    "password": "aJOBX90_min25k.",
    "rôles": ["administrateur"]
}
```
_Les utilisateurs qui sont saisis par défaut dans la base de données ne peuvent pas être utilisés pour se connecter, uniquement en mode lecture, pour tester un utilisateur sans rôle d'administrateur, en créer un à partir de zéro._

## Points de terminaison 💻

_Dans le dossier postman, vous avez un json avec tous les points de terminaison configurés._
_Aussi je les laisse ici :_
__
```
http://localhost:3030/auth/signup

Exemple d'ajout au corps :
{
    "nom d'utilisateur": "Prueba",
    "courriel": "prueba@prueba.com",
    "password": "123$456aBcd",
    "rôles": ["administrateur"]
}
```
```
http://localhost:3030/auth/login

Exemple d'ajout au corps :
{
    "courriel": "prueba@prueba.com",
    "password": "123$456aBcd"
}
```
```
http://localhost:3030/users

(Ajoutez le jeton à l'autorisation d'en-tête).
```

## Construit avec 🛠️

* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Langage de programmation utilisé.
* [Node.js](https://nodejs.org/es/docs/) - Environnement pour exécuter JavaScript côté serveur.
* [Express](https://www.npmjs.com/package/express) - framework node.js.
* [NPM](https://www.npmjs.com/) - Gestionnaire de dépendances.
* [MongoDB](https://docs.mongodb.com/) - Base de données non relationnelle utilisée pour le projet.
* [Mongoose](https://mongoosejs.com/docs/guide.html) - MongoDB ODM.
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - Mécanisme pour pouvoir se propager entre deux parties, et en toute sécurité.
* [bcryptjs](https://www.npmjs.com/package/bcryptjs) - Module pour chiffrer les mots de passe.
* [Dotenv](https://www.npmjs.com/package/dotenv) - Bibliothèque pour utiliser les variables d'environnement.

## Versionné 📌

_J'ai utilisé le versioning sémantique [SemVer](http://semver.org/) pour cette application._

## Auteur ✒️

* [Daniel Españadero](https://github.com/DanielEspanadero) - *Tout le projet*

## Licence 📄

_Ce projet est sous licence MIT - voir le fichier [LICENSE](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/LICENSE) pour plus de détails._