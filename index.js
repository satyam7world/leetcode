/**
 * @param {string} s
 * @return {number}
 * Symbol       Value
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 */
var romanToInt = function (s) {

    let result = 0;
    const map = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ]);
    for (let i = 0; i < s.length; i++) {
        const character = s[i];
        const value = map.get(character)
        const nextValue = map.get(s?.[i + 1]) ?? 0
        if (nextValue <= value) {
            result += value
        } else {
            result -= value;
        }
    }
    return 'result is ' + result;
};


console.log(romanToInt("III"))
console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCIV"))