# 👨🏻‍💻 JOBarcelona '22 | Back-end 👨🏻‍💻

_Este pacote foi desenvolvido do zero por [Daniel Españadero](https://github.com/DanielEspanadero)._

_Este é um dos desafios de qualificação que fazem parte do [JOBarcelona '22 hackathon online](https://nuwe.io/challenge/jobarcelona-'22-back-end). O resultado deste desafio permitirá que os vencedores participem do hackathon presencial que acontecerá no dia 31 de maio de 2022 no Camp Nou._

_O código para descriptografar a senha está localizado no caminho `src/helpers/password-pdf.js` 😉_

## Traduções 💬

_Este arquivo README também está disponível em outros idiomas:_
- [Catalão](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/README-cat.md)
- [Francês](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/README-fr.md)
- [Alemão](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/README-de.md)
- [Italiano](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/README-it.md)
- [Inglês](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/README.md)
- [Espanhol](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/README-es.md)
- [Sueco](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/README-se.md)

## Metas
_`JOBarcelona '22` foi criado para atender às seguintes necessidades específicas:_

_✅ Tarefa 1 → Conectar à porta: 3030 - CONCLUÍDO_

_✅ Tarefa 2 → As variáveis ​​de ambiente não devem ser carregadas no github, mas deve haver um template que permita saber quais são necessárias. - CONCLUÍDO_

_✅ Tarefa 3 → As rotas de autenticação devem permitir que os usuários se registrem e efetuem login: Uma rota para registro/inscrição, Uma rota para login/login. - CONCLUÍDO_

_✅ Tarefa 4 → Tanto a rota de login quanto a rota de registro devem enviar o token para poder entrar nas demais rotas. - CONCLUÍDO_

_✅ Tarefa 5 → Além disso, é necessária uma rota que retorne toda a lista de usuários para que eles possam controlar o crescimento a partir do backoffice do JOBX. Esta rota deve ser protegida e o acesso só será dado a um usuário com a função admin e com as credenciais que estão criptografadas no documento: route: /users. - CONCLUÍDO_

_✅ Tarefa 6 → Um usuário tem como parâmetros obrigatórios: nome de usuário (deve ser único), email (deve seguir o padrão de email e ser único), senha (deve ter no mínimo 8 caracteres, incluir uma letra maiúscula e um número). - CONCLUÍDO_

_✅ TAREFA EXTRA → Decifrar senha do PDF - CONCLUÍDO_

## Começando 🚀

_Estas instruções permitirão que você obtenha uma cópia de trabalho do projeto em sua máquina local para fins de desenvolvimento e teste._

### Pré requisitos 📋

_Para que o projeto funcione corretamente, é recomendável ter uma série de programas instalados e configurados corretamente:_
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js e npm](https://nodejs.org/es/)
- [MongoDB](https://docs.mongodb.com/manual/installation/)

### Instalação 🔧

_Ao ter clonado este projeto em seu repositório local lembre-se de executar o seguinte comando no terminal para instalar as dependências e que tudo funcione corretamente:_
```
npm instalar
```

### Variáveis ​​de ambiente .env 🪛

_Para o projeto funcionar corretamente você tem que habilitar as variáveis ​​de ambiente, para isso você tem que criar um arquivo com o nome .env e inserir os dados que você tem no template .config.env_

![Demo](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/docs/env.png)

## Comandos para executar ⌨️

⚠️ ANTES DE COMEÇAR, LEMBRE-SE DE INICIAR O SERVIDOR MONGODB ⚠️

_Assim que todos os programas e dependências necessários estiverem instalados, basta executar o comando:_
```
npm início
```
_Ou você também pode digitar o comando para a versão de desenvolvimento._
```
npm executar dev
```

## quando começa 🤔
_Quando o aplicativo iniciar, ele fará o cálculo para descriptografar a chave PDF, iniciará o servidor e os usuários no banco de dados e criará o usuário com a função admin, que terá as seguintes credenciais:_
```
{
    "username": "jobx_admin",
    "email": "admin@jobx.com",
    "password": "aJOBX90_min25k.",
    "roles": ["admin"]
}
```
_Os usuários que são inseridos por padrão no banco de dados não podem ser usados ​​para fazer login, apenas no modo de leitura, para testar um usuário sem função de administrador, crie um do zero._

## Pontos Finais 💻

_Na pasta do carteiro você tem um json com todos os endpoints configurados._
_Também os deixo aqui:_
__
```
http://localhost:3030/auth/signup

Exemplo para adicionar ao corpo:
{
    "username": "Prueba",
    "email": "prueba@prueba.com",
    "senha": "123$456aBcd",
    "roles": ["admin"]
}
```
```
http://localhost:3030/auth/login

Exemplo para adicionar ao corpo:
{
    "email": "prueba@prueba.com",
    "senha": "123$456aBcd"
}
```
```
http://localhost:3030/users

(Adicione o token à autorização do cabeçalho).
```

## Construído com 🛠️

* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Linguagem de programação usada.
* [Node.js](https://nodejs.org/es/docs/) - Ambiente para executar JavaScript no lado do servidor.
* [Express](https://www.npmjs.com/package/express) - framework node.js.
* [NPM](https://www.npmjs.com/) - Gerenciador de dependências.
* [MongoDB](https://docs.mongodb.com/) - Banco de dados não relacional usado para o projeto.
* [Mongoose](https://mongoosejs.com/docs/guide.html) - MongoDB ODM.
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - Mecanismo para poder propagar entre duas partes, e com segurança.
* [bcryptjs](https://www.npmjs.com/package/bcryptjs) - Módulo para criptografar senhas.
* [Dotenv](https://www.npmjs.com/package/dotenv) - Biblioteca para usar variáveis ​​de ambiente.

## Versionado 📌

_Eu usei versão semântica [SemVer](http://semver.org/) para este aplicativo._

## Autor ✒️

* [Daniel Españadero](https://github.com/DanielEspanadero) - *Todo o projeto*

## Licença 📄

_Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/LICENSE) para detalhes._