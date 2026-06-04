/**************************************************************************************************************************
* Objetivo: Arquivo responsavel pela manipulação do banco de dados
* Data: 04/06/2026
* Autor: Diego Araujo
* Versão: 1.0
*************************************************************************************************************************/

//Import do Prisma Client
const { PrismaClient } = require('@prisma/client');
const { PrismaMariaDb } = require('@prisma/adapter-mariadb');
require('dotenv').config();

//Instancia do Objeto Prisma Client
const adapter = new PrismaMariaDb(process.env.DATABASE_URL);
const prisma = new PrismaClient({ adapter });

const selectAllContatos = async function(){
    
    let sql = 'select * from tbl_contatos';
    //$queryRawUnSafe() é quando temos um script sql
    //$queryRaw()
    //Executa no Banco de Dados o script SQL de Select
    let rsContatos = await prisma.$queryRawUnsafe(sql);

    if(rsContatos.length > 0)
        return rsContatos
    else
        return false;
}

const insertContato = async function(contato){
    let sql = `insert into tbl_contatos (nome, cpf, email) values('${contato.nome}', '${contato.cpf}', '${contato.email}')`;

    //$executeRaw()
    //$executeRawUnsafe()
    let result = await prisma.$executeRawUnsafe(sql);

    if(result)
        return true;
    else
        return false;
}

module.exports = {
    selectAllContatos,
    insertContato
};
