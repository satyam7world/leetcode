// unsolved
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x === 1) return 1;
    let r = Math.max(0, x);
    for (let i = 0; i < x; i++) {
        const square = i * i;
        if (square === x) {
            return i;
        }
        r = i;
        if (square > i) {
            break;
        }
    }
    return r;
};
// console.log(mySqrt(4))
// console.log(mySqrt(8))
console.log(mySqrt(1))
// console.log(mySqrt(64))