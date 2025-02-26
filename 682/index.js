/**
 *
 *
 * @param {string[]} operations
 * @return {number}
 *
 * An integer x.
 * Record a new score of x.
 * '+'.
 * Record a new score that is the sum of the previous two scores.
 * 'D'.
 * Record a new score that is the double of the previous score.
 * 'C'.
 * Invalidate the previous score, removing it from the record.
 *
 */
var calPoints = function (operations) {
    const stack = [];
    for (const ops of operations) {
        const score = Number.parseInt(ops);
        if (isNaN(score)) {
            switch (ops) {
                case '+':
                    const last2Sum = stack.at(-1) + stack.at(-2);
                    stack.push(last2Sum)
                    break;
                case 'D':
                    stack.push(stack.at(-1) * 2)
                    break;
                case 'C':
                    stack.pop();
                    break;
            }
        } else {
            stack.push(score);
        }
    }
    console.log(stack);
    return stack.reduce((a, b) => (a + b), 0)
};


console.log(calPoints(["5", "2", "C", "D", "+"]))

// console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]))