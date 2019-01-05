"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UNASSIGNED = 0;
function sudokuSolver(grid) {
    if (solveSudoku(grid) === true) {
        return grid;
    }
    else {
        return 'NO SOLUTION EXISTS!';
    }
}
exports.sudokuSolver = sudokuSolver;
function solveSudoku(grid) {
    let row = 0;
    let col = 0;
    let checkBlankSpaces = false;
    for (row = 0; row < grid.length; row++) {
        for (col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === UNASSIGNED) {
                checkBlankSpaces = true;
                break;
            }
        }
        if (checkBlankSpaces === true) {
            break;
        }
    }
    if (checkBlankSpaces === false) {
        return true;
    }
    for (let num = 1; num <= 9; num++) {
        if (isSafe(grid, row, col, num)) {
            grid[row][col] = num;
            if (solveSudoku(grid)) {
                return true;
            }
            grid[row][col] = UNASSIGNED;
        }
    }
    return false;
}
function usedInRow(grid, row, num) {
    for (let col = 0; col < grid.length; col++) {
        if (grid[row][col] === num) {
            return true;
        }
    }
    return false;
}
function usedInCol(grid, col, num) {
    for (let row = 0; row < grid.length; row++) {
        if (grid[row][col] === num) {
            return true;
        }
    }
    return false;
}
function usedInBox(grid, boxStartRow, boxStartCol, num) {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (grid[row + boxStartRow][col + boxStartCol] === num) {
                return true;
            }
        }
    }
    return false;
}
function isSafe(grid, row, col, num) {
    return (!usedInRow(grid, row, num) &&
        !usedInCol(grid, col, num) &&
        !usedInBox(grid, row - row % 3, col - col % 3, num));
}
