/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
        const multiplier = Math.pow(10, digits.length - 1 - i)
        console.log(digits[i], multiplier);
        sum += digits[i] * multiplier;
    }
    sum++;
    const back = sum.toString();
    console.log(digits, back)
    const result = [];
    for (let digit of back) {
        result.push(parseInt(digit))
    }
    return result;
};


console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]))
// console.log(plusOne([1, 2, 3]))
// console.log(plusOne([4, 3, 2, 1]))