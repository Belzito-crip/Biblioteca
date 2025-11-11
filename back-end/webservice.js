import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello AAAAA')
})

app.listen(3000)