/**
 * @param {number[][]} matrix
 * @return Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    console.log(matrix)
    matrix.reverse();
    console.log(matrix)
    for (let row = 0; row < matrix.length; ++row) {
        for (let col = 0; col < row; ++col) {
            const temp = matrix[row][col];
            matrix[row][col] = matrix[col][row];
            matrix[col][row] = temp;
        }
    }
    console.log(matrix)
    return matrix
};


console.log(rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]]
))