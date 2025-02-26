/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const sanitize = [];
    for (const char of s) {
        const lower = char.toLowerCase();
        if (lower.match(/[a-z]|[0-9]/)) {
            sanitize.push(lower);
        }
    }

    if (sanitize.length === 0) {
        return true;
    }

    let rp = sanitize.length - 1;
    for (let i = 0; i < sanitize.length; i++) {
        if (sanitize[i] !== sanitize[rp]) {
            return false;
        }

        // console.log('index', i, rp)
        // console.log('matching ', sanitize[rp], sanitize[i])
        rp--;

        if (i >= rp) {
            return true;
        }
    }
    return false;
};

// console.log(isPalindrome("A man, a plan, a canal: Panama"))
// console.log(isPalindrome("race a car"))
// console.log(isPalindrome("0P"))
console.log(isPalindrome("."))