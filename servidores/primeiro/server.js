const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Olá, mundo!");
});

app.get("/sobre", (req, res) => {
    res.send("Essa é a página sobre iaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiiaiaiaiaiaiaaiaiaiaiaiaiaiaiaiaiaiaiaiaiiaaiaiaiiaiaiaiiaiaiiaaiiiiaiaiaiiaiaiaiiaiaiaiaiaiaiaiaiaaiaiaiaiaiaaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiiaiaaiiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaiaia");
});

app.get("/aluno/:nome", (req, res) => {
    res.send("Olá " + req.params.nome);
})

//app.get("/alunos", (req, res) => {
//    res.json([
//        {               
//            nome: "João",
//            idade: 15
//        },
//        {
//            nome: "Maria",
//            idade: 16
//        }
//    ]);
//});

app.get("/aluno/:nome/:idade", (req, res) => {

    res.send(
        req.params.nome + " tem " +
        req.params.idade + " anos"
    );
});

app.get("/alunos", (req, res) => {

    res.send("Olá " + req.query.nome);
    
});
// http://localhost:3000/alunos?nome=joao

app.get("/secredo", (req,res) => {
    res.send("PEDIDI")
})

app.listen(3000, () => {
    console.log("Servidor rodando!");
});

// localhost:3000 /