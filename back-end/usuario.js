const { conexaoBanco } = require('./database');

async function listarUsuarios() {
    try {
        const conexao = await conexaoBanco();
        const [rows] = await conexao.execute('SELECT * FROM usuario');
        return rows;
    } catch (e) {
        throw new Error(`Aconteceu um erro inesperado durante a coleta de dados de usuário no banco de dados \n\n ${e.message}`)
    }
}

async function adicionarUsuarios(data) {
    try {
        const { nome, tipoUser, email, telefone } = data;
        const conexao = await conexaoBanco();
        const [resultado] = await conexao.execute(`INSERT INTO biblioteca.usuario (nome, tipoUser, email, telefone) VALUES (?, ?, ?, ?)`, [nome, tipoUser, email, telefone])
        console.log(resultado.insertId)
        return
    } catch (e) {
        throw new Error(`Aconteceu algum erro para adicionar um novo usuário no banco de dados \n\n ${e.message}`)
    }
}

async function atualizarUser(id, data) {
    try {
        const { nome, tipoUser, email, telefone } = data;
        const conexao = await conexaoBanco();
        await conexao.execute(`UPDATE biblioteca.usuario SET nome = ?, tipoUser = ?, email = ?, telefone = ? WHERE (idusuario = ?)`, [nome, tipoUser, email, telefone, id]);
        return
    } catch (e) {
        throw new Error(`Aconteceu algum erro para atualizar o usuário ${idusuario}, no banco de dados \n\n ${e.message}`)
    }
}

async function deletaUser(id) {
    
}

module.exports = { listarUsuarios, adicionarUsuarios, atualizarUser };