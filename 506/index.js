// Unsolved
/**
 * @param {number[]} score
 * @return {string[]}
 */
const findRelativeRanks = function (score) {
    const map = new Map();
    console.log(score)
    const sortedScore = score.sort((a, b) => (b - a));
    console.log(sortedScore)
    for (let i = 0; i < sortedScore.length; i++) {
        map.set(sortedScore[i], i + 1)
    }
    const result = [];
    console.log(map)
    for (let i = 1; i <= score.length; i++) {
        const mapping = i
        // console.log(mapping)
        if (mapping === 1) {
            result.push('Gold Medal')
        } else if (mapping === 2) {
            result.push('Silver Medal')
        } else if (mapping === 3) {
            result.push('Bronze Medal')
        } else {
            result.push(mapping)
        }
    }
    return result
};

// console.log(findRelativeRanks([5, 4, 3, 2, 1]))
console.log(findRelativeRanks([10,3,8,9,4]))