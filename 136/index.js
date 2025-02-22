/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
    const numMap = new Map();
    for (const num of nums) {
        if (numMap.has(num)) {
            numMap.delete(num);
        } else {
            numMap.set(num, false);
        }
    }
    return numMap.keys().next().value;
};

console.log(singleNumber([4, 1, 2, 1, 2]))
console.log(singleNumber([2, 2, 1]))
console.log(singleNumber([1]))