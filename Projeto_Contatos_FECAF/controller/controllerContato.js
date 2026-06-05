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

//insere um contato no BD
const setNewContato = async function(contato){
    //Valida os dados do contato
    if( contato.nome == ''  || contato.nome == undefined || 
        contato.cpf == ''   || contato.cpf == undefined  ||
        contato.email == '' || contato.email == undefined
        )
        return false;
    else{
        //Chama a função da model para inserir o contato no BD
        let result = await contatoDAO.insertContato(contato);
        if(result)
            return true;
        else
            return false;
    }    
}

//atualiza um contato no BD
const setUpdateContato = async function(contato, idContato){
    //Valida os dados do contato
    if( contato.nome == ''  || contato.nome == undefined || 
        contato.cpf == ''   || contato.cpf == undefined  ||
        contato.email == '' || contato.email == undefined||
        idContato == ''    || idContato == undefined
        )
        return false;
    else{

        //Adiciona o id do contato no JSON
        contato.id = idContato;

        //Chama a função da model para atualizar o contato no BD
        let result = await contatoDAO.updateContato(contato);
        if(result)
            return true;
        else
            return false;
    }    
}
module.exports = {
    getContatos,
    setNewContato,
    setUpdateContato
};