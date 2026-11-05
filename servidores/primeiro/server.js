const express = require("express");
const app = express();

app.use(express.json());

const moviesRouter = require("./routes/movies");

app.use("/movies", moviesRouter);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});

// localhost:3000 /
