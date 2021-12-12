const Sudoku = require("./sudoku");
const assert  = require("assert");

const testBoard = new Sudoku([
    [1, 2, 5, 4, 0, 6],
    [1, 4, 3, 2, 0, 1],
    [1, 6, 4, 3, 0, 2],
    [1, 1, 6, 5, 0, 3],
    [1, 5, 1, 6, 0, 4],
    [1, 3, 2, 1, 0, 5]
]);

describe('.isValidMove', () => {
    it('1: returns false when adding a value that is already in a row or column', () => {
        let move = testBoard.isValidMove(0,4,4);
        assert.ok(move === false);
    });

    it('2: returns true when adding a valid value', () => {
        let move = testBoard.isValidMove(0,4,3);
        assert.ok(move === true);
    });

    it('3: returns false when trying to add a value to an already occupied space', () => {
        let move = testBoard.isValidMove(2,2,3);
        assert.ok(move === false);
    });

    it('4: returns false when adding a number thats not between the valid values', () => {
        //naive approach
        assert.ok(testBoard.isValidMove(0,4,9) === false);
    });
});

describe('.changeCell', () => {
    it('1: changes the cell when given a valid value', () => {
        //setup
        let row = 0;
        let col = 4;
        let val = 3;

        //exercise
        testBoard.changeCell(row, col, val);

        //verify
        assert.ok(testBoard.board[row][col] === val);
    });
    it('2: does not change the cell when given a false value', () => {
        //setup
        let row = 0;
        let col = 4;
        let val = 4;

        //exercise
        testBoard.changeCell(row, col, val);

        //verify
        assert.ok(testBoard.board[row][col] !== val);
    });
});

describe('.checkIfWin', () => {
    it('1: checks if a finished board returns true', () => {
        const finishedBoard = new Sudoku([
            [4,3,1,3],
            [1,2,3,1],
            [1,1,2,1],
            [2,1,1,2]
        ]);
        assert.ok(finishedBoard.checkIfWin());
    });

    it('1: checks if an unfinished board returns false', () => {
        const unfinishedBoard = new Sudoku([
            [4,3,0,0],
            [1,2,3,0],
            [0,0,2,0],
            [2,1,0,0]
        ]);
        assert.ok(!unfinishedBoard.checkIfWin());
    });
});
