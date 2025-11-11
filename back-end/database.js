const mysql = require('mysql2')

async function conectar() {
    const conexao = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'senai',
        database: 'Biblioteca'
    })

    return conexao;

}

module.exports = { conectar }