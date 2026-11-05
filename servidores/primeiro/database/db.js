const Database = require("better-sqlite3");

const db = new Database("./database/movies.db");
db.exec(`
    CREATE TABLE IF NOT EXISTS movies (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        genre TEXT NOT NULL,
        year INTEGER NOT NULL
    )
`);
module.exports = db;