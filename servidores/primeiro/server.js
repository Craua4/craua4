const express = require("express");
const app = express();

const moviesRouter = require("./routes/movies");
const { notFound, errorHandler } = require("./middlewares/middleware");

app.use(express.json());

app.use("/movies", moviesRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});