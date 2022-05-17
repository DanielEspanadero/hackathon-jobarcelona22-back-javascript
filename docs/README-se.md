# 👨🏻‍💻 JOBarcelona '22 | Back-end 👨🏻‍💻

_Detta paket har utvecklats från grunden av [Daniel Españadero](https://github.com/DanielEspanadero)._

_Detta är en av de kvalificerande utmaningarna som ingår i [JOBarcelona '22 online hackathon](https://nuwe.io/challenge/jobarcelona-'22-back-end). Resultatet av denna utmaning kommer att tillåta vinnarna att delta i hackathon ansikte mot ansikte som äger rum den 31 maj 2022 på Camp Nou._

_Koden för att dekryptera lösenordet finns i sökvägen `src/helpers/password-pdf.js` 😉_

## Översättningar 💬

_Denna README-fil är även tillgänglig på andra språk:_
- [katalanska](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/README-cat.md)
- [franska](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/README-fr.md)
- [Tyska](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/README-de.md)
- [italienska](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/README-it.md)
- [Portugisiska](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/README-pt.md)
- [spanska](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/README-es.md)
- [svenska](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/README-se.md)

## Mål
_`JOBarcelona '22' har skapats för att möta följande specifika behov:_

_✅ Uppgift 1 → Anslut till port: 3030 - COMPLETED_

_✅ Uppgift 2 → Miljövariablerna ska inte laddas upp till github, men det måste finnas en mall som gör det möjligt att veta vilka som är nödvändiga. - COMPLETED_

_✅ Uppgift 3 → Autentiseringsvägarna måste tillåta användare att registrera sig och logga in: En väg för registrering/registrering, En väg för inloggning/inloggning. - COMPLETED_

_✅ Uppgift 4 → Både inloggningsvägen och registreringsvägen måste skicka token för att kunna gå in på de andra rutterna. - COMPLETED_

_✅ Uppgift 5 → Dessutom behövs en rutt som returnerar hela listan med användare så att de kan kontrollera tillväxten från JOBX backoffice. Denna rutt måste skyddas och åtkomst kommer endast att ges till en användare med administratörsrollen och med de referenser som är krypterade i dokumentet: route: /users. - COMPLETED_

_✅ Uppgift 6 → En användare har som obligatoriska parametrar: användarnamn (måste vara unikt), e-post (måste följa e-postmönstret och vara unikt), lösenord (måste ha minst 8 tecken, inkludera en stor bokstav och en siffra). - COMPLETED_

_✅ EXTRA UPPGIFT → Knäck PDF-lösenord - AVSLUTAD_

## Börjar 🚀

_De här instruktionerna låter dig få en arbetskopia av projektet på din lokala dator för utvecklings- och testsyften._

### Förhandskrav 📋

_För att projektet ska fungera korrekt rekommenderas det att ha en serie program installerade och korrekt konfigurerade:_
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js och npm](https://nodejs.org/es/)
- [MongoDB](https://docs.mongodb.com/manual/installation/)

### Installation 🔧

_När du har klonat det här projektet till ditt lokala arkiv kom ihåg att köra följande kommando i terminalen för att installera beroenden och att allt fungerar korrekt:_
```
npm installera
```

### Miljövariabler .env 🪛

_För att projektet ska fungera korrekt måste du aktivera miljövariablerna, för detta måste du skapa en fil med namnet .env och ange den data du har i .config.env-mallen_

![Demo](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/env.png)

## Kommandon att köra ⌨️

⚠️ KOM IHÅG ATT STARTA MONGODB-SERVERN INNAN DU STARTAR ⚠️

_När alla nödvändiga program och beroenden är installerade, kör bara kommandot:_
```
npm start
```
_Eller så kan du också ange kommandot för utvecklingsversionen._
```
npm kör dev
```

## när det börjar 🤔
_När applikationen startar kommer den att göra beräkningen för att dekryptera PDF-nyckeln, den kommer att starta servern och användarna i databasen och den skapar användaren med administratörsrollen, som kommer att ha nästa referens:_
```
{
    "username": "jobx_admin",
    "email": "admin@jobx.com",
    "password": "aJOBX90_min25k.",
    "roller": ["admin"]
}
```
_De användare som anges som standard i databasen kan inte användas för att logga in, endast i läsläge, för att testa en användare utan administratörsroll, skapa en från början._

## Slutpunkter 💻

_I postman-mappen har du en json med alla konfigurerade slutpunkter._
_Också jag lämnar dem här:_
__
```
http://localhost:3030/auth/signup

Exempel för att lägga till text:
{
    "username": "Prueba",
    "email": "prueba@prueba.com",
    "lösenord": "123$456aBcd",
    "roller": ["admin"]
}
```
```
http://localhost:3030/auth/login

Exempel för att lägga till text:
{
    "email": "prueba@prueba.com",
    "lösenord": "123$456aBcd"
}
```
```
http://localhost:3030/users

(Lägg till token i rubrikauktoriseringen).
```

## Byggd med 🛠️

* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Programmeringsspråk som används.
* [Node.js](https://nodejs.org/es/docs/) - Miljö för att köra JavaScript på serversidan.
* [Express](https://www.npmjs.com/package/express) - node.js ramverk.
* [NPM](https://www.npmjs.com/) – Beroendehanterare.
* [MongoDB](https://docs.mongodb.com/) – Icke-relationell databas som används för projektet.
* [Mongoose](https://mongoosejs.com/docs/guide.html) - MongoDB ODM.
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - Mekanism för att kunna spridas mellan två parter, och säkert.
* [bcryptjs](https://www.npmjs.com/package/bcryptjs) - Modul för att kryptera lösenord.
* [Dotenv](https://www.npmjs.com/package/dotenv) – Bibliotek för att använda miljövariabler.

## Versionerad 📌

_Jag har använt semantisk versionshantering [SemVer](http://semver.org/) för denna applikation._

## Författare ✒️

* [Daniel Españadero](https://github.com/DanielEspanadero) - *Alla projektet*

## Licens 📄

_Detta projekt är licensierat under MIT-licensen - se filen [LICENSE](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/LICENSE) för detaljer._