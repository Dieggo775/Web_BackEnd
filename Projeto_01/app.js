/*******************************************************************************************************************************
* Objetivo: API responsavel pela saida de dados de estados e cidades do BRASIL
* Data: 04/05/2026
* Autor: Diego Araujo
* Versao: 1.0
*******************************************************************************************************************************/

/*
    Para criar uma API, precisamos instalar:
        EXPRESS - npm install express --save
        CORS - npm install cors --save
        BODY-PARSER - npm install body-parser --save
*/

// Import das dependencias
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Criando um objeto do tipo express
const app = express();

//request => Chegara na API
//response => Retorno da API

//API Privadas => APIs internas (particulares) das empresas
//API Publicas => APIs externas, geralmente livres para utilizacao

app.use((request, response, next) => {
    // Access-Control-Allow-Origin configuracao para quem poderar acessar a API
    response.header('Access-Control-Allow-Origin', '*');
    //Access-Control-Allow-Method serve para escolher que tipo de requisicao a API recebera
    response.header('Access-Control-Allow-Methods', 'GET');

    app.use(cors());
    next(); //para continuar para a proxima etapa
})
