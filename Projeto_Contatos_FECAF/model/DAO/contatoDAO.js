/**************************************************************************************************************************
* Objetivo: Arquivo responsavel pela manipulação do banco de dados
* Data: 04/06/2026
* Autor: Diego Araujo
* Versão: 1.0
*************************************************************************************************************************/

//Import do Prisma Client
const { PrismaClient } = require('@prisma/client');


//Instancia do Objeto Prisma Client
const prisma = new PrismaClient();

const selectAllContatos = async function(){
    
    let sql = 'select * from tbl_contatos';
    //Executa no Banco de Dados o script SQL de Select
    let rsContatos = await prisma.$queryRawUnsafe(sql);

    if(rsContatos.length > 0)
        return rsContatos;
    else
        return false;
}

module.exports = {
    selectAllContatos
};
