/*
    // MVC - (model, view, controller)
    Model - Modelagem dos dados (BD)
    Controller - É responsavel pela regra de negócio do projeto
    View - É responsavel pela interação com o cliente (usuário)

    Dependencias para acesso ao Banco de Dados (ORMS)
    - Sequelize
    - Prisma*
    - Fastfy

    Instalação e configuração do prisma
        npm install prisma --save
        npx prisma init
        npm install @prisma/client --save
*/

/*
* Objetivo: API para realizar requisições de contatos da UniFecaf
* Data: 11/05/2026
* Autor: Diego Araujo
* Versão: 1.0
*/

// Import das dependencias
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Criando um objeto do tipo express
const app = express(); 

app.use((request, response, next) => {

    //configuração de quem poderá acessar a API
    response.header('Access-Control-Allow-Methods', '*');

    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    app.use(cors());
    next();
})