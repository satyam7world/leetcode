/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (result.length === arr.length) {
            break;
        }
        const currentElement = arr[i]
        result.push(currentElement)
        if (currentElement === 0) {
            result.push(0);
        }
    }
    this.arr = result;

};
console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]))
console.log(duplicateZeros([1, 2, 3]))