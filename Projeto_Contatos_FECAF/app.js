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
* Data: 04/06/2026
* Autor: Diego Araujo
* Versão: 1.0
*/

// Import das dependencias
require('dotenv').config();
const express = require('express');
const cors = require('cors');

// Criando um objeto do tipo express
const app = express();

app.use(cors());
app.use(express.json());

app.use((error, request, response, next) => {
    if (error instanceof SyntaxError && error.status === 400 && 'body' in error) {
        return response.status(400).json({ message: 'JSON inválido no corpo da requisição.' });
    }
    next(error);
});

const controllerContatos = require('./controller/controllerContato.js');

//Endpoint: GET para retornar os contatos do Banco de Dados
app.get('/v1/contatos/', async function(request, response, next){

    let dadosContato = await controllerContatos.getContatos();

    if(dadosContato){
        response.status(200);
        response.json(dadosContato);
    }else{
        response.status(404);
        response.json({message: 'Nenhum contato encontrado'});
    }
})

//Endpoint: POST para inserir um contato no Banco de Dados
app.post('/v1/contato/', async function(request, response, next){
    let dados = request.body;
    let result = await controllerContatos.setNewContato(dados);

    if(result){
        response.status(201);
        response.json({"message": "Contato inserido com sucesso"});
    }else{
        response.status(400);
    }
})

app.put('/v1/contato/:id', async function(request, response, next){

    //Recebe os dados do contato e o id do contato a ser atualizado
    let dados = request.body;
    let id = request.params.id;

    let result = await controllerContatos.setUpdateContato(dados, id);

    if(result){
        response.status(200);
        response.json({"message": "Contato atualizado com sucesso"});
    }else{
        response.status(400);
        response.json({"message": "Erro ao atualizar contato"});
    }
})

app.listen(8080, function(){
    console.log('API funcionando e aguardando requisições');
})