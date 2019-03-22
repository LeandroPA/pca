const express = require('express')
const mongoose = require('mongoose')

const app = express();

const dbConfig = require('./config/config')

app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({extended:true, limit: '50mb'}));

//Conexão com o banco
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.dbStringConexao, {useNewUrlParser:true})

//Middleware com as rotas
const login = require('./routes/loginRoutes')

app.use('/api',login)

app.listen(3000, () =>{
    console.log('running on port 3000')
})