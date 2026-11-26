const express = require("express");
const router = express.Router();

const db = require("../database/db");
const { validateId, validateMovie } = require("../middlewares/middleware.js")

router.get("/", (req,res) => {
    const movies = db.prepare("SELECT * FROM movies").all();

    res.json(movies);
})

// READ: listar todos os filmes
router.get("/", (req, res) => {
    const movies = db.prepare(
        "SELECT * FROM movies"
    ).all();
    res.json(movies);
});

// READ: buscar um filme pelo ID
router.get("/:id", (req, res) => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            message: "ID inválido"
        })
    }
    const movie = db.prepare(
        "SELECT * FROM movies WHERE id = ?"
    ).get(id);
    if (!movie) {
        return res.status(404).json({
            message: "Filme não encontrado"
        })
    }

    res.json(movie);
});

// CREATE: adicionar um filme
router.post("/", (req, res) => {

    const { title, genre, year } = req.body;

    if (
        typeof title !== "string" || !title.trim() ||
        typeof genre !== "string" || !genre.trim() ||
        !Number.isInteger(year) || year < 1888 || year > 2100
    ) {
        return res.status(400).json({
            message: "Informe título, gênero e ano válidos"
        });
    }

    
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