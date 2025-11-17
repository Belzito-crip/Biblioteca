const mysql = require('mysql2/promise')

async function conexaoBanco() {
    try {
        const conexao = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'senai',
            database: 'biblioteca'
        })
        return conexao;
    } catch (e) {
        throw new Error(`Aconteceu um erro inesperado durante o acesso no banco de dados \n\n ${e.message}`)
    }
}

module.exports = { conexaoBanco };