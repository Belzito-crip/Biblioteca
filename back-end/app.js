const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Está vivo!</h1>')
});

app.get('/user', (req, res) => {
  res.send('Listagem de Usuarios')
});

app.post('/user', (req, res) => {
  res.send('Adiciona novo Usuario')
});

app.delete('/user', (req, res) => {
  res.send('Deletar Usuario')
});

app.put('/user', (req, res) => {
  res.send('Atualizar Usuario Existente')
});

app.listen(3000)
//http://localhost:3000