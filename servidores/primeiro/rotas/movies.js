const express = require("express");
const router = express.Router();

const movies = require("../data/movies");

// READ: listar todos os filmes
router.get("/", (req, res) => {
    res.json(movies);
});

// READ: buscar um filme pelo ID
router.get("/:id", (req, res) => {
    const id = Number(req.params.id);

    const movie = movies.find(movie => movie.id === id);

    if (!movie) {
        return res.status(404).json({
            message: "Filme não encontrado"
        });
    }

    res.json(movie);
});

// CREATE: adicionar um filme
router.post("/", (req, res) => {
    const movie = req.body;

    movies.push(movie);

    res.status(201).json(movie);
});

// UPDATE: atualizar um filme
router.put("/:id", (req, res) => {
    const id = Number(req.params.id);

    const movie = movies.find(movie => movie.id === id);

    if (!movie) {
        return res.status(404).json({
            message: "Filme não encontrado"
        });
    }

    movie.title = req.body.title;
    movie.genre = req.body.genre;
    movie.year = req.body.year;

    res.json(movie);
});

// DELETE: remover um filme
router.delete("/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = movies.findIndex(movie => movie.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Filme não encontrado"
        });
    }

    movies.splice(index, 1);

    res.json({
        message: "Filme removido!"
    });
});

module.exports = router;