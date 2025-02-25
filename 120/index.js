// Unsolved
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    const smaller = triangle.map(x => (Math.min(...x)));
    console.log(smaller)
    const minTotal = smaller.reduce((a, b) => (a + b), 0);
    return minTotal
};

// console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]))
console.log(minimumTotal([[-1], [2, 3], [1, -1, -3]]))