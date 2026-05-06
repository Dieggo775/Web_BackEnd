/* ********************************************************************************************************************************
* Objetivo: Funcoes para manipular dados de estados e cidades do BrAsil
* Data: 04/05/2026
* Autor: Diego
* Versao: 1.0
***********************************************************************************************************************************/

//Import do arquivo de dados de estados e cidades
const dados_estados_cidades = require('../modulo/estados_cidades.js');

//Retorna a lista de estados do Brasil
const getListEstados = function(){

    //Cria uma variavel do tipo Array
    let arrayListaDeEstados = [];

    let jsonEstados = {};

    dados_estados_cidades.listaDeEstados.estados.forEach(function (estado) {
            //Cria uma variavel do tipo Json
            let jsonListaDeEstados = {};
            //Cria os atributos do json
            jsonListaDeEstados.uf = estado.sigla;
            jsonListaDeEstados.description = estado.nome;

            //Adiciona o JSON com o estado dentro do array
            arrayListaDeEstados.push(jsonListaDeEstados);
    })

    //Padronizando a saida da funcao para ser sempre um JSON
    jsonEstados.estados = arrayListaDeEstados;
    jsonEstados.count = arrayListaDeEstados.length;


    return jsonEstados;
}

const getListCidades = function(siglaEstado){
    let sigla = siglaEstado;
    let arrayListCidades = [];
    let jsonListaCidadesJSON = {};
    let erro = true;

    //Tratamento para validar se o argumento foi encaminhado na funcao
    if(typeof(sigla) != 'undefined' && sigla != '' && sigla.length == 2)
    {
        //Percorre o array de cidades para validar a sigla do estado
        dados_estados_cidades.listaDeEstados.estados.forEach(item => {
            //Localiza a sigla do estado dentro do array de cidades
            if(item.sigla.indexOf(sigla.toUpperCase()) == 0)
            {
                //Percorre o array da chave de cidades dentro do estado que foi encontrado
                item.cidades.forEach(itemCidade =>{
                    arrayListCidades.push(itemCidade.nome);
                    erro = false;
                });
                
                jsonListaCidadesJSON.uf = item.sigla
                jsonListaCidadesJSON.descricao = item.nome
                jsonListaCidadesJSON.count = arrayListCidades.length
                jsonListaCidadesJSON.cidades = arrayListCidades
            }
        });

    }
    if (erro)
        return false;
    else
        return jsonListaCidadesJSON;
};

// const getListCidades = function (siglaEstado){

//     let arrayListaDeCidades = [];

//     let jsonCidades = {};

//     dados_estados_cidades.listaDeCidades.cidades.forEach(function (cidade) {

//         let jsonListaDeCidades = {};

//         jsonListaDeCidades.id = cidade.id;
//         jsonListaDeCidades.description = cidade.nome;

//         arrayListaDeCidades.push(jsonListaDeCidades);
//     })
//     jsonCidades.cidades = arrayListaDeCidades;
//     jsonCidades.count = arrayListaDeCidades.length;

//     return jsonCidades;
// }

module.exports = {
    getListEstados,
    getListCidades
};