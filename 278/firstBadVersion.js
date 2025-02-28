/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let maxBad = 0;
        const findBad = (initial, ver) => {
            if (ver < initial) {
                return maxBad;
            }
            const middle = Math.floor((initial + ver) / 2)
            console.log('test', middle)
            const isBad = isBadVersion(middle);
            if (isBad) {
                maxBad = Math.max(maxBad, middle);
                return findBad(initial, middle - 1);
            }
            return findBad(middle + 1, ver);
        }
        return findBad(1, n);
    };
};

const isBadX = (num) => {
    if (num < 4) {
        return true
    }
    return false;
}

console.log(solution(isBadX)(6))