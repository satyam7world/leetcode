// UnSolved
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
    let justified = [];
    let included = 0;
    while (included < words.length) {
        for (let i = words.length; i >= 0; i--) {
            const slice = words.slice(included, i)
            const sent = slice.join(' ');
            if (sent.length < maxWidth) {
                const remLength = maxWidth - slice.join('').length;
                const spacer = Math.ceil(remLength / slice.length);
                const sentence = slice.join(' '.repeat(spacer));
                justified.push(sentence);
                included += slice.length;
                break;
            }
        }
        // break;
    }
    return justified;
};

console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16))