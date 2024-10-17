const express = require('express');
const app = express();

const livrosRoutes = require('./api/routes/livrosRoutes');
const prefeituras = require('./api/routes/prefeiturasRoutes');
const engenheiros = require('./api/routes/engenheirosRoutes');
const index = require('./api/routes/indexRoutes');

app.use(express.json())

app.set('view engine', 'ejs');
app.set("views",'./api/views')

const port = 3000;

app.use('/livros', livrosRoutes);
app.use('/prefeituras', prefeituras);
app.use('/engenheiros', engenheiros);
app.use("/", index);

app.listen(port, () => {
    console.log(`Aplicativo Rodando na Porta ${port}`);
})

const conexao = require("./api/config/conexao.js");

module.exports = app;