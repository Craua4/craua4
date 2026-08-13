const size = 10;
const gird = document.getElementById('grid');
let board = [];

function createBoard() {
    for (let i = 0; i < size; i++) {
        board[i] = [];
        for (let j = 0; j < size; j++) {
            board[i][j] = 0;
        }
    }
}

function placeShips() {
    let ships = 5;
    while (ships > 0) {
        let x = Math.floor(Math.random() * size);
        let y = Math.floor(Math.random() * size);

        if (board[x][y] === 0) {
            board[x][y] = 1;
            ships--;
        }
    }
}

function createGrid() {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.id = i + '-' + j;
            
        }
    }
}