// 1) Valida o ID que vem na URL (ex: /movies/5)
function validateId(req, res, next) {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            message: "o id ta domal :skull:"
        });
    }

    req.movieId = id; // guarda o ID já convertido para a rota usar
    next();
}

// 2) Valida os dados do filme enviados no body (POST e PUT)
function validateMovie(req, res, next) {
    const { title, genre, year } = req.body;
    const maxYear = new Date().getFullYear() + 5;

    if (typeof title !== "string" || !title.trim()) {
        return res.status(400).json({
            message: "O campo title é obrigatório"
        });
    }

    if (typeof genre !== "string" || !title.trim()) {
        return res.status(400).json({
            message: "O campo genre é obrigatório"
        });
    }

    if (!Number.isInteger(year) || year < 1888 || year > maxYear) {
        return res.status(400).json({
            message: `O campo year deve ser um inteiro entre 1888 e ${maxYear}`
        });
    }

    // guarda os dados já limpos para a rota usar
    req.movie = {
        title: title.trim(),
        genre: genre.trim(),
        year
    };

    next(); 
}

// 3) Rota não encontrada (404)
function notFound(req, res) {
    res.status(404).json({
            message: "Rota não encontrada"
    });
}

// 4) Tratamento de erros inesperados
// O Express só reconhece como "handler de erro" a função com 4 parâmetros
function errorHandler(err, req, res, next) {
    if (err.type === "entity.parse.failed") {
        return res.status(400).json({
            message: "JSON inválido no corpo da requisição"
        });
    }

    console.error(err);

    res.status(500).json({
        message: "Erro interno do servidor"
    });
}

module.exports = {
    validateId,
    validateMovie,
    notFound,
    errorHandler
};

const express = require("express");
const router = express.Router();

const db = require("../database/db");
const { validateId, validateMovie } = require("../middlewares/middleware");

// buscar um filme
router.get("/:id", validateId, (req, res) => {
    const movie = db.prepare(
        "SELECT * FROM movies WHERE id = ?"
    ).get(req.movieId);

    if (!movie) {
        return res.status(404).json({ message: "Filme não encontrado" });
    }

    res.json(movie);
});

router.post("/", validateMovie, (req, res) => {
    const { title, genre, year } = req.movie;

    const result = db.prepare(
        "INSERT INTO movies (title, genre, year) VALUES (?, ?, ?)"
    ).run(title, genre, year);

    res.status(201).json({ id: result.lastInsertRowid, title, genre, year });
});

router.put("/:id", validateId, validateMovie, (req, res) => {
    const { title, genre, year } = req.movie;

    const result = db.prepare(
        "UPDATE movies SET title = ?, genre = ?, year = ? WHERE id = ?"
    ).run(title,genre,year,req.movieId);

    if (result.changes === 0) {
        return res.status(404).json({ message: "Filme não encontrado" });
    }

    res.json({ id: req.movieId, title, genre, year });
});

router.delete("/:id", validateId, (req, res) => {
    const result = db.prepare(
        "DELETE FROM movies WHERE id = ?"
    ).run(req.movieId);

    if (result.changes === 0) {
        return res.status(404).json({ message: "Filme não encontrado" });
    }
    res.json({ message: "Filme removido com sucesso" });
});