/**************************************************************************************************************************
* Objetivo: Arquivo responsavel pela manipulação do banco de dados
* Data: 04/06/2026
* Autor: Diego Araujo
* Versão: 1.0
*************************************************************************************************************************/

//Import do arquivo de dados
const contatoDAO = require('../model/DAO/contatoDAO.js');


//retorna todos os contatos do BD
const getContatos = async function(){
    //Cria um objeto do tipo json
    let jsonContatos = {};
    //solicita os dados do Banco de Dados na Model
    let dadosContatos = await contatoDAO.selectAllContatos();
    //Valida o retorno dos Dados
    if(dadosContatos){
        jsonContatos.count = dadosContatos.length;
        jsonContatos.contatos = dadosContatos;
        return jsonContatos;
    }else{
        return false;
    }
}

module.exports = {
    getContatos
};