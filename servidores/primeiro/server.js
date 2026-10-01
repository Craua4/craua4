const express = require("express");

const app = express();


app.use(express.json())
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
});

let movies = [
    { id: 1, title: "O Senhor dos Anéis", genre: "Fantasia", year: 2001 },
    { id: 2, title: "Matrix", genre: "Ficção Científica", year: 1999}
]

app.get("/movies", (req, res) => {
    res.json(movies);
});

app.post("/movies", (req, res) => {
    console.log("BODY RECEBIDO:", req.body);

    const movie = req.body;

    movies.push(movie);

    res.status(201).json(movie);
})

app.get("/movies/:id", (req, res) => {
    const id = Number(req.params.id);

    const movie = movies.find(movie => movie.id === id);

    res.json(movie)
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});

// localhost:3000 /

