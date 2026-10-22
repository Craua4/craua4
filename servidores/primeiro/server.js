const express = require("express");
const app = express();

app.use(express.json());

const moviesRouter = require("./routes/movies");

app.use("/movies", moviesRouter);

db.exec(`
    CREATE TABLE IF NOT EXISTS movies (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        genre TEXT NOT NULL,
        year INTEGER NOT NULL
    )
`);
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});

// localhost:3000 /
