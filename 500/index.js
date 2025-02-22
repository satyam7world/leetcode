// Unsolved
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    const map = new Map();
    const keyRows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
    for (let word of words) {
        // const word = '';
        for (let row of keyRows) {
            let prev = true;
            for (let i = 0; i < word.length; i++) {
                const char = word[i];
                const included = row.includes(char);
                if (included && prev) {
                    map.set(`${word},${row}`, true)
                } else {
                    map.set(`${word},${row}`, false)
                    break
                }
                prev = included
            }
        }
    }
    console.log(map)
};


console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]))