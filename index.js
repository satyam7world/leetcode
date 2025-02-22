/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function (intervals) {
    const result = [];
    console.log(intervals);
    for (let i = 1; i < intervals.length; i++) {
        const [pairF, pairS] = intervals[i - 1];
        const [currPairF, currPairS] = intervals[i];
        if (pairF < currPairF < pairS) {
            result.push([pairF, currPairS])
        }
    }
    return result;
};

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]))