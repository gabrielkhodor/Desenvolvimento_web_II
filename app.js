var express = require('express');
const app = express();
const port = 3000;
//importação de uma biblioteca
const aluno = require('./routes/alunos')
app.use(express.json())


/*
var alunos =  
[
        {
            id: 1,
            nome: 'Fulano Silva',
            idade: 27
        },
        {
            id: 2,
            nome: 'Ciclano Almeida',
            idade: 32
        }
]
*/
app.get('/aluno', (req, res) => {
    console.log("Lendo alunos...\n",alunos)
//    res.send('<h3>Alunos:</h3> '+json(alunos))
    return res.json(alunos)
});

app.get('/aluno/:cod', (req, res) => {
    let codigo = req.params.cod;
    console.log('O aluno é: ',alunos[codigo]);    
    return res.json(alunos[codigo]);
});


//rota do projeto
app.get('/', (req, res) => {
    console.log('Rota Raiz Encontrada!!!');
    res.send('<h3> Rota Raiz Encontrada! <br> Olá Mundo </h3>');
})

/*
app.get('/aluno', (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            alunos: [
                {
                    id: 1,
                    nome: 'Fulano Silva',
                    idade: 27
                },
                {
                    id: 2,
                    nome: 'Ciclano Almeida',
                    idade: 32
                }
            ]
        }
    });
});
*/



/*
app.get('/aluno/:id', (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            aluno: {
                id: req.params.id,
                res.send('<h3>Acessando Elementos num Vetor: </h3><p> O carro é: '+[aluno[id]])
                //                idade: 27
            }
        }
    });
});
*/

app.get('/sobre', (req, res) => {
    console.log('Rota Sobre Encontrada!!!');
    res.send('<h3> Rota Sobre Encontrada! <br> Saiba Mais Sobre a Nossa Empresa </h3>');
})
/*
app.get("*", function (req, res) {
    //console.log('Página não Encontrada - 404');
    res.send('<h3>Página Não Encontrada!</h3><p> Erro 404</p>')
})
*/

app.use('/aluno',aluno)
//servidor rodando
app.listen(port, () => {
    console.log(`Aplicativo Rodando na Porta ${port}`);
})
