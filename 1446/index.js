/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
    let power = 1;
    let maxPower = 1;
    let lastChar = s[0];
    for (let i = 1; i <= s.length; i++) {
        const currCharacter = s[i];
        if (lastChar === currCharacter) {
            ++power;
        } else {
            maxPower = Math.max(maxPower, power)
            power = 1;
        }
        lastChar = currCharacter;
    }
    return maxPower
};

console.log(maxPower('leetcode')) // 2
console.log(maxPower("abbcccddddeeeeedcba")) // 5
console.log(maxPower("cc")) // 2