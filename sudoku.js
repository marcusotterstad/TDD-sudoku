const prompt = require('prompt-sync')({sigint: true});

class Sudoku {
    constructor(board) {
        this.board = board;
    }

    static createFinishedBoard(rows, cols, ) {

    }

    printBoard() {
        let boardLen = this.board.length;
        let a = [];
        for (let i = 0; i < this.board[0].length; i++) {
            a.push(i+1);
        }
        console.log("     " + a.join(" "));
        console.log("   " +"-".repeat(boardLen*2 +1));

        for (let i = 0; i < boardLen; i++) {
            console.log((i+1) + ": | " + this.board[i].join(" "));
        }
        console.log("   " +"-".repeat(boardLen*2 +1));
    }

    isValidMove(rowInp, colInp, val) {
        let row = [];
        let col = [];
        for(let element of this.board[rowInp]) {
            row.push(element);
        }
        for (let i = 0; i < this.board.length; i ++) {
            col.push(this.board[i][colInp]);
        }
        if(row.includes(val) === false && col.includes(val) === false && val >= 1 && val <= this.board.length) {
            return true;
        }
        return false;
    }

    changeCell(row, col, val) {
        if(val != 0 && this.isValidMove(row, col, val)) {
            this.board[row][col] = val;
        }
    }

    //takes all the rows and columns
    checkIfWin() {
        let finishedCount = 0;

        for (let i = 0; i < this.board.length; i++) {
            if(this.board[i].includes(0) === false) {
                finishedCount += 1;
            }
        }
        if(finishedCount === this.board.length) {
            return true;
        }
        return false;
    }


    play() {
        while (true) {
            //clears console and prints board
            console.clear();
            this.printBoard();

            // checks if you win
            if(this.checkIfWin()){
                console.log("You win!");
                process.exit();
            }

            // accepts input
            const row = prompt('Choose a row: ') - 1;
            const col = prompt('Choose a column: ') - 1;
            const inputVal = parseInt(prompt('Choose what number to change it to: '));

            //changes the cell if it is a valid move
            this.changeCell(row, col, inputVal);
        }
    }
}
const noobBoard = new Sudoku([
    [4,3,0,0],
    [1,2,3,0],
    [0,0,2,0],
    [2,1,0,0]
]);

//noobBoard.play();

const myBoard = new Sudoku([
    [1, 2, 5, 4, 0, 6],
    [1, 4, 3, 2, 0, 1],
    [1, 6, 4, 3, 0, 2],
    [1, 1, 6, 5, 0, 3],
    [1, 5, 1, 6, 0, 4],
    [1, 3, 2, 1, 0, 5]
]);
const realBoard = new Sudoku([
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]
]);

realBoard.play();


module.exports = Sudoku;