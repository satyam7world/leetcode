var duplicateZeros = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        const currentElement = arr[i];
        if (currentElement === 0) {
            for (let j = i; j < arr.length; j++) {
                if (j === i) {
                    arr[j] = 0;
                }
                arr[j] = arr[i - 1]
            }
        }
    }
    return arr
};
console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]))
// console.log(duplicateZeros([1, 2, 3]))