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

//Endpoints => Pontos de escuta da API
//Endpoint: GET: Listar os estados
app.get('/estados', cors(), async function(request, response, next){

    //import do arquivo de funcoes
    let controllerEstados = require('./controller/controller_estados_cidades.js');

    //solicita a lista de estados para a funcao
    let estados = controllerEstados.getListEstados();

    //define o que a api devera retornar
    if(estados){
        response.status(200);
        response.json(estados);
    }else{
        response.status(404);
    }
})

//Endpoint: GET: Listar as cidades de um estado
app.get('/cidades/estado/:uf', cors(), async function(request, response, next){

    let siglaEstado = request.params.uf;

    //import do arquivo de funcoes
    let controllerEstados = require('./controller/controller_estados_cidades.js');

    //solicita a lista de estados para a funcao
    let estados = controllerEstados.getListCidades(siglaEstado);

    //define o que a api devera retornar
    if(estados){
        response.status(200);
        response.json(estados);
    }else{
        response.status(404);
    }
})

// e origatorio para fazer a api aguardando ou escutando novas requisicoes
app.listen(8080, function(){
    console.log('API funcionando e aguardando novas requisicoes ....');
})