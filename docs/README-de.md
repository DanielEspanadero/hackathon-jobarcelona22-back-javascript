# 👨🏻‍💻 JOBarcelona '22 | Back-end 👨🏻‍💻

_Dieses Paket wurde von [Daniel Españadero](https://github.com/DanielEspanadero) von Grund auf neu entwickelt._

_Dies ist eine der Qualifikationsherausforderungen, die Teil des [JOBarcelona '22 Online Hackathon](https://nuwe.io/challenge/jobarcelona-'22-back-end) sind. Das Ergebnis dieser Herausforderung ermöglicht es den Gewinnern, am persönlichen Hackathon teilzunehmen, der am 31. Mai 2022 im Camp Nou stattfinden wird._

_Der Code zum Entschlüsseln des Passworts befindet sich im Pfad `src/helpers/password-pdf.js` 😉_

## Übersetzungen 💬

_Diese README-Datei ist auch in anderen Sprachen verfügbar:_
- [Katalanisch](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/README-cat.md)
- [Französisch](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/README-fr.md)
- [Englisch](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/README.md)
- [Italienisch](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/README-it.md)
- [Portugiesisch](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/README-pt.md)
- [Spanisch](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/README-es.md)
- [Schwedisch](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/README-se.md)

## Ziele
_`JOBarcelona '22` wurde entwickelt, um die folgenden spezifischen Anforderungen zu erfüllen:_

_✅ Aufgabe 1 → Verbinden mit Port: 3030 - ABGESCHLOSSEN_

_✅ Aufgabe 2 → Die Umgebungsvariablen sollten nicht auf github hochgeladen werden, aber es muss eine Vorlage geben, die es ermöglicht zu wissen, welche erforderlich sind. - ABGESCHLOSSEN_

_✅ Aufgabe 3 → Die Authentifizierungsrouten müssen es Benutzern ermöglichen, sich zu registrieren und anzumelden: Eine Route für die Registrierung / Anmeldung, Eine Route für die Anmeldung / Anmeldung. - ABGESCHLOSSEN_

_✅ Aufgabe 4 → Sowohl die Anmelderoute als auch die Registrierungsroute müssen den Token senden, um die anderen Routen betreten zu können. - ABGESCHLOSSEN_

_✅ Aufgabe 5 → Außerdem wird eine Route benötigt, die die gesamte Liste der Benutzer zurückgibt, damit diese das Wachstum aus dem JOBX-Backoffice steuern können. Diese Route muss geschützt werden, und der Zugriff wird nur einem Benutzer mit der Administratorrolle und mit den Anmeldeinformationen gewährt, die im Dokument verschlüsselt sind: route: /users. - ABGESCHLOSSEN_

_✅ Aufgabe 6 → Ein Benutzer hat als obligatorische Parameter: Benutzername (muss eindeutig sein), E-Mail (muss dem E-Mail-Muster folgen und eindeutig sein), Passwort (muss mindestens 8 Zeichen lang sein, einen Großbuchstaben und eine Zahl enthalten). - ABGESCHLOSSEN_

_✅ ZUSATZAUFGABE → PDF-Passwort knacken - ABGESCHLOSSEN_

## Ab 🚀

_Mit diesen Anweisungen können Sie zu Entwicklungs- und Testzwecken eine Arbeitskopie des Projekts auf Ihrem lokalen Computer erstellen._

### Voraussetzungen 📋

_Damit das Projekt korrekt funktioniert, wird empfohlen, eine Reihe von Programmen installiert und richtig konfiguriert zu haben:_
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js und npm](https://nodejs.org/es/)
- [MongoDB](https://docs.mongodb.com/manual/installation/)

### Einbau 🔧

_Wenn Sie dieses Projekt in Ihr lokales Repository geklont haben, denken Sie daran, den folgenden Befehl im Terminal auszuführen, um die Abhängigkeiten zu installieren und dass alles korrekt funktioniert:_
```
npm installieren
```

### Umgebungsvariablen .env 🪛

_Damit das Projekt korrekt funktioniert, müssen Sie die Umgebungsvariablen aktivieren, dazu müssen Sie eine Datei mit dem Namen .env erstellen und die Daten, die Sie haben, in die .config.env-Vorlage eingeben_

![Demo](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/env.png)

## Befehle zum Ausführen von ⌨️

⚠️ BEVOR SIE STARTEN, DENKEN SIE DARAN, DEN MONGODB-SERVER GESTARTET ZU HABEN ⚠️

_Sobald alle erforderlichen Programme und Abhängigkeiten installiert sind, führen Sie einfach den folgenden Befehl aus:_
```
npm starten
```
_Oder Sie können auch den Befehl für die Entwicklungsversion eingeben._
```
npm laufen dev
```

## wenn es los geht 🤔
_Wenn die Anwendung startet, führt sie die Berechnung zum Entschlüsseln des PDF-Schlüssels durch, startet den Server und die Benutzer in der Datenbank und erstellt den Benutzer mit der Administratorrolle, der die nächsten Anmeldeinformationen hat:_
```
{
    "Benutzername": "jobx_admin",
    "E-Mail": "admin@jobx.com",
    "Passwort": "aJOBX90_min25k.",
    "Rollen": ["Administrator"]
}
```
_Die standardmäßig in der Datenbank eingetragenen Benutzer können nicht zur Anmeldung verwendet werden, nur im Lesemodus, um einen Benutzer ohne Administratorrolle zu testen, erstellen Sie eine neue._

## Endpunkte 💻

_Im Postman-Ordner haben Sie eine JSON mit allen konfigurierten Endpunkten._
_Außerdem lasse ich sie hier:_
__
```
http://localhost:3030/auth/signup

Beispiel für das Hinzufügen zum Körper:
{
    "Benutzername": "Prueba",
    "E-Mail": "prueba@prueba.com",
    "Passwort": "123$456aBcd",
    "Rollen": ["Administrator"]
}
```
```
http://localhost:3030/auth/login

Beispiel für das Hinzufügen zum Körper:
{
    "E-Mail": "prueba@prueba.com",
    "Passwort": "123$456aBcd"
}
```
```
http://localhost:3030/users

(Fügen Sie das Token zur Header-Autorisierung hinzu).
```

## Gebaut mit 🛠️

* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Verwendete Programmiersprache.
* [Node.js](https://nodejs.org/es/docs/) – Umgebung zum Ausführen von JavaScript auf der Serverseite.
* [Express](https://www.npmjs.com/package/express) - node.js-Framework.
* [NPM](https://www.npmjs.com/) – Abhängigkeitsmanager.
* [MongoDB](https://docs.mongodb.com/) – Nicht relationale Datenbank, die für das Projekt verwendet wird.
* [Mongoose](https://mongoosejs.com/docs/guide.html) – MongoDB-ODM.
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - Mechanismus, um sich sicher zwischen zwei Parteien verbreiten zu können.
* [bcryptjs](https://www.npmjs.com/package/bcryptjs) - Modul zum Verschlüsseln von Passwörtern.
* [Dotenv](https://www.npmjs.com/package/dotenv) - Bibliothek zur Verwendung von Umgebungsvariablen.

## Versioniert 📌

_Ich habe für diese Anwendung semantische Versionierung [SemVer](http://semver.org/) verwendet._

## Autor ✒️

* [Daniel Españadero](https://github.com/DanielEspanadero) - *Das ganze Projekt*

## Lizenz 📄

_Dieses Projekt ist unter der MIT-Lizenz lizenziert – Einzelheiten finden Sie in der Datei [LICENSE](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/LICENSE)._