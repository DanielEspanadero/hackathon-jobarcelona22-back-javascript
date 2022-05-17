# 👨🏻‍💻 JOBarcelona '22 | Back-end 👨🏻‍💻

_Aquest paquet ha estat desenvolupat des de zero per [Daniel Españadero](https://github.com/DanielEspanadero)._

_Aquest és un dels reptes de classificació que formen part del [hackathon en línia JOBarcelona '22](https://nuwe.io/challenge/jobarcelona-'22-back-end). El resultat d'aquest repte permetrà als guanyadors assistir al hackató presencial que tindrà lloc el 31 de maig de 2022 al Camp Nou._

_El codi per desxifrar la contrasenya es troba a la ruta `src/helpers/password-pdf.js` 😉_

## Traduccions 💬

_Aquest fitxer README també està disponible en altres idiomes:_
- [Català](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/README-cat.md)
- [francès](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/README-fr.md)
- [Alemany](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/README-de.md)
- [Italià](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/README-it.md)
- [portuguès](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/README-pt.md)
- [castellà](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/README-es.md)
- [Suec](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/README-se.md)

## Metes
_`JOBarcelona '22' s'ha creat per cobrir les següents necessitats específiques:_

_✅ Tasca 1 → Connectar-se al port: 3030 - COMPLET_

_✅ Tasca 2 → Les variables d'entorn no s'han de pujar a github, però hi ha d'haver una plantilla que permeti saber quines són necessàries. - COMPLET_

_✅ Tasca 3 → Les rutes d'autenticació han de permetre als usuaris registrar-se i iniciar sessió: Una ruta per al registre/registre, Una ruta per iniciar sessió/iniciar sessió. - COMPLET_

_✅ Tasca 4 → Tant la ruta d'inici de sessió com la ruta de registre han d'enviar el testimoni per poder entrar a la resta de rutes. - COMPLET_

_✅ Tasca 5 → A més, cal una ruta que retorni tota la llista d'usuaris perquè puguin controlar el creixement des del backoffice de JOBX. Aquesta ruta s'ha de protegir i només es donarà accés a un usuari amb el rol d'administrador i amb les credencials que estan xifrades al document: route: /users. - COMPLET_

_✅ Tasca 6 → Un usuari té com a paràmetres obligatoris: nom d'usuari (ha de ser únic), correu electrònic (ha de seguir el patró de correu electrònic i ser únic), contrasenya (ha de tenir un mínim de 8 caràcters, incloure una majúscula i un número). - COMPLET_

_✅ TASCA EXTRA → Desbloquejar la contrasenya PDF - COMPLETA_

## Començant 🚀

_Aquestes instruccions us permetran obtenir una còpia de treball del projecte a la vostra màquina local amb finalitats de desenvolupament i proves._

### Prerequisits 📋

_Per a que el projecte funcioni correctament, es recomana tenir una sèrie de programes instal·lats i configurats correctament:_
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js i npm](https://nodejs.org/es/)
- [MongoDB](https://docs.mongodb.com/manual/installation/)

### Instal·lació 🔧

_Quan hagueu clonat aquest projecte al vostre repositori local, recordeu executar la següent comanda al terminal per instal·lar les dependències i que tot funcioni correctament:_
```
instal·lació npm
```

### Variables d'entorn .env 🪛

_Per a que el projecte funcioni correctament has d'habilitar les variables d'entorn, per a això has de crear un fitxer amb el nom .env i introduir les dades que tens a la plantilla .config.env_

![Demo](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/env.png)

## Ordres per executar ⌨️

⚠️ ABANS DE COMENÇAR, RECORDA TENIR EL SERVIDOR MONGODB INICIAT ⚠️

_Un cop instal·lats tots els programes i dependències necessaris, només cal que executeu l'ordre:_
```
inici npm
```
_O també podeu introduir l'ordre per a la versió de desenvolupament._
```
npm run dev
```

## quan comença 🤔
_Quan s'iniciï l'aplicació, farà el càlcul per desxifrar la clau PDF, iniciarà el servidor i els usuaris de la base de dades i crearà l'usuari amb el rol d'administrador, que tindrà les següents credencials:_
```
{
    "nom d'usuari": "jobx_admin",
    "email": "admin@jobx.com",
    "contrasenya": "aJOBX90_min25k.",
    "rols": ["administrador"]
}
```
_Els usuaris que s'introdueixen per defecte a la base de dades no es poden utilitzar per iniciar sessió, només en mode de lectura, per provar un usuari sense rol d'administrador, crear-ne un des de zero._

## Punts finals 💻

_A la carpeta del carter teniu un json amb tots els endpoints configurats._
_També les deixo aquí:_
__
```
http://localhost:3030/auth/signup

Exemple per afegir al cos:
{
    "username": "Prueba",
    "email": "prueba@prueba.com",
    "contrasenya": "123$456aBcd",
    "rols": ["administrador"]
}
```
```
http://localhost:3030/auth/login

Exemple per afegir al cos:
{
    "email": "prueba@prueba.com",
    "contrasenya": "123$456aBcd"
}
```
```
http://localhost:3030/users

(Afegiu el testimoni a l'autorització de la capçalera).
```

## Construït amb 🛠️

* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Llenguatge de programació utilitzat.
* [Node.js](https://nodejs.org/es/docs/) - Entorn per executar JavaScript al costat del servidor.
* [Express](https://www.npmjs.com/package/express) - framework node.js.
* [NPM](https://www.npmjs.com/) - Gestor de dependències.
* [MongoDB](https://docs.mongodb.com/) - Base de dades no relacional utilitzada per al projecte.
* [Mongoose](https://mongoosejs.com/docs/guide.html) - MongoDB ODM.
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - Mecanisme per poder propagar-se entre dues parts, i de manera segura.
* [bcryptjs](https://www.npmjs.com/package/bcryptjs) - Mòdul per xifrar contrasenyes.
* [Dotenv](https://www.npmjs.com/package/dotenv) - Biblioteca per utilitzar variables d'entorn.

## Versionat 📌

_He utilitzat versions semàntiques [SemVer](http://semver.org/) per a aquesta aplicació._

## Autor ✒️

* [Daniel Españadero](https://github.com/DanielEspanadero) - *Tot el projecte*

## Llicència 📄

_Aquest projecte té llicència sota la llicència MIT: consulteu el fitxer [LICENSE](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/LICENSE) per a més informació._