const express = require('express');
const bodyParser = require('body-parser');
const { listarUsuarios, adicionarUsuarios, atualizarUser } = require('./usuario');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Olá, mundo!');
});

app.get('/usuario', async (req, res) => {
    try {
        const rows = await listarUsuarios();
        res.status(200).json({
            'Lista de usuários': rows
        });
    } catch (e) {
        res.status(500).json({
            'erro': e.message
        })
    }
});
app.post('/usuario', async (req, res) => {
    try {
        let body = req.body
        console.log(body)
        adicionarUsuarios(body)
        res.status(201).send(`Usuário inserido`)
    } catch (e) {
        res.status(500).json({
            "erro": e
        })
    }
});
app.put(`/usuario/:idusuario`, async (req, res) => {
    try {
        const idusuario = req.params.idusuario
        let body = req.body
        await atualizarUser(idusuario, body)
        res.status(200).send(`Usuário ${idusuario} Atualizado`)
    } catch (e) {
        res.status(500).json({
            "erro": e.message
        })
    }
});
app.delete('/usuario/:idusuario', async (req, res) => {
    try {
        const idusuario = req.params.idusuario
    } catch (e) {

    }
});

app.listen(3000);
//  http://localhost:3000/usuario