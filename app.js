const express = require('express');
const app = express();

const aluno = require('./routes/alunosRoutes');
const index = require('./routes/indexRoutes');

app.use(express.json())

const port = 3000;

app.use('/aluno', aluno);
app.use("/", index);

//servidor rodando
app.listen(port, () => {
    console.log(`Aplicativo Rodando na Porta ${port}`);
})

