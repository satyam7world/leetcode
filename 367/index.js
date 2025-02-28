/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    const findRoot = (start, end) => {
        if (start > end) {
            return false;
        }
        const middle = Math.floor((start + end) / 2);
        // console.log('findRoot', middle)
        const sq = middle * middle;
        if (sq === num) {
            return true;
        }
        if (num > sq) {
            return findRoot(middle + 1, end);
        } else {
            return findRoot(start, middle - 1);
        }
    }

    return findRoot(0, num);
};

console.log(isPerfectSquare(17))