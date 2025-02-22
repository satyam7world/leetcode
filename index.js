/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
    const findWord = 'balloon'
    let usedIndex = new Set();
    let result = 0;
    for (let i = 0; i < text.length; i++) {
        const concernedChar = findWord.includes(text[i]);
        if (concernedChar) {
            if (!usedIndex.has(i)) {
                usedIndex.add(i);
            }
        }
        result = Math.floor(usedIndex.size / findWord.length)
    }
    return result;
};

console.log(maxNumberOfBalloons("nllbblooon"))
// console.log(maxNumberOfBalloons("nlaebolko"))
// console.log(maxNumberOfBalloons("loonbalxballpoon"))
// console.log(maxNumberOfBalloons("leetcode"))