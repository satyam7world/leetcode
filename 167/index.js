/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    const map = new Map();
    for (let i = 0; i < numbers.length; i++) {
        const req = target - numbers[i];
        if (map.has(req)) {
            return [map.get(req), i + 1]
        }
        map.set(numbers[i], i + 1)
    }
    return [];
};

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([2, 3, 4], 6))