const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

// iniciando o app
const app = express()

// permitir receber dados no formato JSON
app.use(express.json())
// permite acesso a aplicação via domínios
app.use(cors())

// iniciando o database
mongoose.connect('mongodb://localhost:27017/docker', 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
requireDir('./src/models')

// rotas
app.use('/api', require('./src/routes'))

app.listen(3001)