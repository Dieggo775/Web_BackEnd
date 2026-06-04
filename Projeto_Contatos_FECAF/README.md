# Projeto Contatos FECAF

API REST simples para consultar contatos usando Express + Prisma + MySQL.

## Tecnologias

- Node.js
- Express
- Prisma ORM
- MySQL
- CORS

## Pré-requisitos

- Node.js instalado
- MySQL em execução localmente
- Banco criado com o nome informado em `DATABASE_URL`

## Instalação

1. Clone o projeto
2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure a variável de ambiente no arquivo `.env`:

   ```env
   DATABASE_URL="mysql://SEU_USUARIO:SUA_SENHA@localhost:3306/SEU_BANCO"
   ```

4. Gere o cliente Prisma:

   ```bash
   npx prisma generate
   ```

## Executando a API

```bash
node app.js
```

A aplicação ficará disponível em:

```text
http://localhost:8080
```

## Endpoint disponível

### Listar contatos

```http
GET /v1/contatos
```

Exemplo de resposta:

```json
{
  "count": 2,
  "contatos": [
    {
      "id": 1,
      "nome": "Diego Araujo",
      "cpf": "12309845687",
      "email": "diego@teste.com"
    }
  ]
}
```

## Estrutura do projeto

- `app.js` — inicialização da API
- `controller/` — lógica de negócio
- `model/DAO/` — acesso ao banco com Prisma
- `prisma/` — schema e configuração do Prisma

## Observação

O projeto está utilizando a configuração atual do Prisma 7 com o adapter MariaDB/MySQL para conexão direta.
