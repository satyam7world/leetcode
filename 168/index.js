/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    const title = '';
    // const digits = Math.ceil(columnNumber / 26);
    // console.log(digits, 'dig')
    //  String.fromCharCode(columnNumber + 64)
    const xix = parseInt(columnNumber, 26);
    console.log(String.fromCharCode((xix - 26) + 64))
    return title;
};


console.log(convertToTitle(1))
console.log(convertToTitle(27))