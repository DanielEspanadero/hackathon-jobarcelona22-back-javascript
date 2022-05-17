# 👨🏻‍💻 JOBarcelona '22 | Back-end 👨🏻‍💻

_Este paquete ha sido desarrollado desde cero por [Daniel Españadero](https://github.com/DanielEspanadero)._

_Este es uno de los desafíos clasificatorios que forman parte del [hackathon online JOBarcelona '22](https://nuwe.io/challenge/jobarcelona-'22-back-end). El resultado de este reto permitirá a los ganadores asistir al hackathon presencial que tendrá lugar el 31 de mayo de 2022 en el Camp Nou._

_El código para descifrar la contraseña se encuentra en la ruta `src/helpers/password-pdf.js` 😉_

## Traducciones 💬

_Este archivo README también está disponible en otros idiomas:_
- [Catalán](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/README-cat.md)
- [Francés](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/README-fr.md)
- [Alemán](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/README-de.md)
- [Italiano](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/README-it.md)
- [Portugués](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/README-pt.md)
- [Español](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/README-es.md)
- [Sueco](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/README-se.md)

## Metas
_`JOBarcelona '22` ha sido creado para dar respuesta a las siguientes necesidades específicas:_

_✅ Tarea 1 → Conectar al puerto: 3030 - COMPLETADO_

_✅ Tarea 2 → Las variables de entorno no se deben subir a github, pero sí se debe tener una plantilla que permita saber cuáles son necesarias. - COMPLETADO_

_✅ Tarea 3 → Las rutas de autenticación deben permitir a los usuarios registrarse e iniciar sesión: Una ruta para registro/inscripción, Una ruta para inicio de sesión/inicio de sesión. - COMPLETADO_

_✅ Tarea 4 → Tanto la ruta de inicio de sesión como la ruta de registro deben enviar el token para poder ingresar a las demás rutas. - COMPLETADO_

_✅ Tarea 5 → Además, se necesita una ruta que devuelva la lista completa de usuarios para que puedan controlar el crecimiento desde el backoffice de JOBX. Esta ruta debe estar protegida y solo se le dará acceso a un usuario con el rol de administrador y con las credenciales que están encriptadas en el documento: ruta: /usuarios. - COMPLETADO_

_✅ Tarea 6 → Un usuario tiene como parámetros obligatorios: nombre de usuario (debe ser único), correo electrónico (debe seguir el patrón de correo electrónico y ser único), contraseña (debe tener un mínimo de 8 caracteres, incluir una letra mayúscula y un número). - COMPLETADO_

_✅ TAREA ADICIONAL → Descifrar la contraseña del PDF - COMPLETADO_

## Empezando 🚀

_Estas instrucciones le permitirán obtener una copia de trabajo del proyecto en su máquina local para fines de desarrollo y prueba._

### Pre requisitos 📋

_Para que el proyecto funcione correctamente, se recomienda tener una serie de programas instalados y configurados adecuadamente:_
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js y npm](https://nodejs.org/es/)
- [MongoDB](https://docs.mongodb.com/manual/installation/)

### Instalación 🔧

_Cuando hayas clonado este proyecto en tu repositorio local recuerda ejecutar el siguiente comando en la terminal para instalar las dependencias y que todo funcione correctamente:_
```
instalar npm
```

### Variables de entorno .env 🪛

_Para que el proyecto funcione correctamente tienes que habilitar las variables de entorno, para ello tienes que crear un archivo con el nombre .env e introducir los datos que tienes en la plantilla .config.env_

![Demostración](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/env.png)

## Comandos para ejecutar ⌨️

⚠️ ANTES DE COMENZAR, RECUERDA TENER INICIADO EL SERVIDOR MONGODB ⚠️

_Una vez que todos los programas y dependencias necesarios estén instalados, simplemente ejecute el comando:_
```
inicio de npm
```
_O también puede ingresar el comando para la versión de desarrollo._
```
npm ejecutar dev
```

## cuando empieza 🤔
_Al iniciar la aplicación, hará el cálculo para descifrar la clave del PDF, iniciará el servidor y los usuarios en la base de datos y creará el usuario con rol de administrador, el cual tendrá las siguientes credenciales:_
```
{
    "nombre de usuario": "trabajox_admin",
    "correo electrónico": "admin@jobx.com",
    "contraseña": "aJOBX90_min25k.",
    "roles": ["administrador"]
}
```
_Los usuarios que se ingresan por defecto en la base de datos no se pueden usar para iniciar sesión, solo en modo lectura, probar un usuario sin rol de administrador, crear uno desde cero._

## Puntos finales 💻

_En la carpeta del cartero tienes un json con todos los endpoints configurados._
_También se los dejo aquí:_
__
```
http://localhost:3030/autorización/registro

Ejemplo para agregar al cuerpo:
{
    "username": "Prueba",
    "email": "prueba@prueba.com",
    "contraseña": "123$456aBcd",
    "roles": ["administrador"]
}
```
```
http://localhost:3030/autorización/inicio de sesión

Ejemplo para agregar al cuerpo:
{
    "email": "prueba@prueba.com",
    "contraseña": "123$456aBcd"
}
```
```
http://localhost:3030/usuarios

(Agregue el token a la autorización del encabezado).
```

## Construido con 🛠️

* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Lenguaje de programación utilizado.
* [Node.js](https://nodejs.org/es/docs/) - Entorno para ejecutar JavaScript del lado del servidor.
* [Express](https://www.npmjs.com/package/express) - marco node.js.
* [NPM](https://www.npmjs.com/) - Administrador de dependencias.
* [MongoDB](https://docs.mongodb.com/) - Base de datos no relacional utilizada para el proyecto.
* [Mangosta](https://mongoosejs.com/docs/guide.html) - MongoDB ODM.
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - Mecanismo para poder propagarse entre dos partes, y de forma segura.
* [bcryptjs](https://www.npmjs.com/package/bcryptjs) - Módulo para cifrar contraseñas.
* [Dotenv](https://www.npmjs.com/package/dotenv) - Biblioteca para usar variables de entorno.

## Versionado 📌

_He utilizado versiones semánticas [SemVer](http://semver.org/) para esta aplicación._

## Autor ✒️

* [Daniel Españadero](https://github.com/DanielEspanadero) - *Todo el proyecto*

## Licencia 📄

_Este proyecto está licenciado bajo la Licencia MIT - vea el archivo [LICENCIA](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/LICENSE) para más detalles._