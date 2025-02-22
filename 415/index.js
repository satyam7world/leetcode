/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = function (num1, num2) {
    const numbers = new Array(2).fill(0);
    for (let i = 0; i < num1.length; i++) {
        const multiplier = Math.pow(10, num1.length - 1 - i);
        numbers[0] = numbers[0] += num1[i] * multiplier
    }
    for (let i = 0; i < num2.length; i++) {
        const multiplier = Math.pow(10, num2.length - 1 - i);
        numbers[1] = numbers[1] += num2[i] * multiplier
    }
    return numbers.reduce((a, b) => (a + b), 0).toString()
};


console.log(addStrings('11', '123'))