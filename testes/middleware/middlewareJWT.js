/*
OBJETIVO: Implementação do JWT no projeto
DATA: 05/06/2026
VERSÃO: 1.0
AUTOR: Diego Araujo
*/

//Importação do JWT
const jwt = require('jsonwebtoken');

//Chave secreta para geração do token
const SECRET = 'a1b2c3';

// Tempo de expiração do token (em segundos)
const EXPIRES = 60;

//Criação do token JWT (retorna o token gerado a partir do payload recebido)
const createJWT = async (payload) => {

    //Geração do token utilizando a função sign do JWT, passando o payload, a chave secreta e o tempo de expiração
        //payload: informações que serão armazenadas no token (ex: id do usuário, nome, etc)
        //SECRET: chave secreta para garantir a segurança do token (deve ser mantida em sigilo)
        //EXPIRES: tempo de expiração do token (em segundos), após esse tempo o token não será mais válido
    const token = jwt.sign({userID: payload}, SECRET, {expiresIn: EXPIRES})

    return token;
}

//Validação do token JWT (recebe o token para validação)
const validateJWT = async (token) => {
    
}