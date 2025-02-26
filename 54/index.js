// UnSolved
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let rowStart = 0, colStart = 0;
    let rowEnd = matrix[0].length - 1;
    let colEnd = matrix.length - 1;

    const spiral = [];

    while (rowStart <= rowEnd && colStart <= colEnd) {
        for (let i = rowStart; i <= rowEnd; i++) {
            const ele = matrix[colStart][i];
            spiral.push(ele);
        }
        colStart++;
        for (let i = colStart; i <= colEnd; i++) {
            const ele = matrix[i][colEnd];
            spiral.push(ele);
        }
        rowEnd--;
        for(let i = rowEnd; i >=rowStart; i--) {
            const ele = matrix[rowEnd][i];
            console.log(ele)
        }
        console.log(spiral)
        break;
    }

    return spiral;
};

console.log(spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]]))