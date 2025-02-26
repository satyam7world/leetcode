/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let construct = true;
    const mag = [...magazine]
    for (const letter of ransomNote) {
        const found = mag.indexOf(letter);
        if (found === -1) {
            return false
        } else {
            mag.splice(found, 1,)
        }
    }
    return construct;
};


console.log(canConstruct('a', 'b')) //false
console.log(canConstruct('aa', 'ab'))//false
console.log(canConstruct('aa', 'aab'))//true