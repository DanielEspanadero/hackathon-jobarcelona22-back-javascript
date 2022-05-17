# 👨🏻‍💻 JOBarcelona '22 | Back-end 👨🏻‍💻

_Questo pacchetto è stato sviluppato da zero da [Daniel Españadero](https://github.com/DanielEspanadero)._

_Questa è una delle sfide di qualificazione che fanno parte dell'[hackathon online JOBarcelona '22](https://nuwe.io/challenge/jobarcelona-'22-back-end). Il risultato di questa sfida consentirà ai vincitori di assistere all'hackathon faccia a faccia che si svolgerà il 31 maggio 2022 al Camp Nou._

_Il codice per decifrare la password si trova nel percorso `src/helpers/password-pdf.js` 😉_

## Traduzioni 💬

_Questo file README è disponibile anche in altre lingue:_
- [Catalano](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/README-cat.md)
- [Francese](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/README-fr.md)
- [Tedesco](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/README-de.md)
- [Inglese](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/README.md)
- [Portoghese](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/README-pt.md)
- [Spagnolo](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/README-es.md)
- [svedese](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/README-se.md)

## Obiettivi
_`JOBarcelona '22` è stato creato per soddisfare le seguenti esigenze specifiche:_

_✅ Attività 1 → Connetti alla porta: 3030 - COMPLETATA_

_✅ Task 2 → Le variabili di ambiente non devono essere caricate su github, ma deve esserci un modello che permetta di sapere quali sono necessarie. - COMPLETATO_

_✅ Compito 3 → Le route di autenticazione devono consentire agli utenti di registrarsi e accedere: una route per la registrazione/registrazione, una route per l'accesso/login. - COMPLETATO_

_✅ Compito 4 → Sia il percorso di accesso che il percorso di registrazione devono inviare il token per poter accedere agli altri percorsi. - COMPLETATO_

_✅ Task 5 → Inoltre, è necessario un percorso che restituisca l'intero elenco di utenti in modo che possano controllare la crescita dal backoffice di JOBX. Questa route deve essere protetta e l'accesso sarà concesso solo a un utente con il ruolo di amministratore e con le credenziali crittografate nel documento: route: /users. - COMPLETATO_

_✅ Compito 6 → Un utente ha come parametri obbligatori: nome utente (deve essere univoco), email (deve seguire lo schema dell'email ed essere univoco), password (deve avere un minimo di 8 caratteri, includere una lettera maiuscola e un numero). - COMPLETATO_

_✅ ATTIVITÀ EXTRA → Crack password PDF - COMPLETATO_

## A partire 🚀

_Queste istruzioni ti permetteranno di ottenere una copia funzionante del progetto sul tuo computer locale per scopi di sviluppo e test._

### Prerequisiti 📋

_Affinché il progetto funzioni correttamente, si consiglia di avere una serie di programmi installati e configurati correttamente:_
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js e npm](https://nodejs.org/es/)
- [MongoDB](https://docs.mongodb.com/manual/installation/)

### Installazione 🔧

_Quando hai clonato questo progetto nel tuo repository locale ricordati di eseguire il seguente comando nel terminale per installare le dipendenze e che tutto funzioni correttamente:_
```
npm installazione
```

### Variabili d'ambiente .env 🪛

_Affinché il progetto funzioni correttamente devi abilitare le variabili d'ambiente, per questo devi creare un file con nome .env e inserire i dati che hai nel template .config.env_

![Demo](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/env.png)

## Comandi da eseguire ⌨️

⚠️ PRIMA DI INIZIARE, RICORDA DI AVVIARE IL SERVER MONGODB ⚠️

_Una volta installati tutti i programmi e le dipendenze necessari, esegui semplicemente il comando:_
```
inizio npm
```
_Oppure puoi anche inserire il comando per la versione di sviluppo._
```
npm esegui dev
```

## quando inizia 🤔
_All'avvio l'applicazione eseguirà il calcolo per decrittare la chiave PDF, avvierà il server e gli utenti nel database e creerà l'utente con il ruolo di admin, che avrà le credenziali successive:_
```
{
    "nome utente": "jobx_admin",
    "email": "admin@jobx.com",
    "password": "aJOBX90_min25k.",
    "ruoli": ["admin"]
}
```
_Gli utenti che vengono inseriti di default nel database non possono essere utilizzati per effettuare il login, solo in modalità lettura, per testare un utente senza ruolo di amministratore, crearne uno da zero._

## Endpoint 💻

_Nella cartella postino hai un json con tutti gli endpoint configurati._
_Inoltre li lascio qui:_
__
```
http://localhost:3030/auth/signup

Esempio per aggiungere al corpo:
{
    "nome utente": "Prueba",
    "email": "prueba@prueba.com",
    "password": "123$456aBcd",
    "ruoli": ["admin"]
}
```
```
http://localhost:3030/auth/login

Esempio per aggiungere al corpo:
{
    "email": "prueba@prueba.com",
    "password": "123$456aBcd"
}
```
```
http://localhost:3030/users

(Aggiungere il token all'autorizzazione dell'intestazione).
```

## Costruito con 🛠️

* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Linguaggio di programmazione utilizzato.
* [Node.js](https://nodejs.org/es/docs/) - Ambiente per eseguire JavaScript sul lato server.
* [Express](https://www.npmjs.com/package/express) - framework node.js.
* [NPM](https://www.npmjs.com/) - Gestore delle dipendenze.
* [MongoDB](https://docs.mongodb.com/) - Database non relazionale utilizzato per il progetto.
* [Mangusta](https://mongoosejs.com/docs/guide.html) - MongoDB ODM.
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - Meccanismo per potersi propagare tra due parti e in sicurezza.
* [bcryptjs](https://www.npmjs.com/package/bcryptjs) - Modulo per crittografare le password.
* [Dotenv](https://www.npmjs.com/package/dotenv) - Libreria per utilizzare le variabili di ambiente.

## Versione 📌

_Ho usato il versionamento semantico [SemVer](http://semver.org/) per questa applicazione._

## Autore ✒️

* [Daniel Españadero](https://github.com/DanielEspanadero) - *Tutto il progetto*

## Licenza 📄

_Questo progetto è concesso in licenza con la licenza MIT - vedere il file [LICENSE](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/LICENSE) per i dettagli._