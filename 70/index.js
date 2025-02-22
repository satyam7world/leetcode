/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let ways = 0;
    let ways1 = Math.floor(n / 2);
    let ways2 = Math.floor(n);
    // console.log(ways1)
    ways += ways1 + ways2
    return ways - 1;
};

console.log(climbStairs(5))
// console.log(climbStairs(4))
// console.log(climbStairs(2))
// console.log(climbStairs(3))
