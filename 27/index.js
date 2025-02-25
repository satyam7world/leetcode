/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let value = nums.filter(v => (v !== val))
    nums = nums.splice(0, value.length, ...value)
    return nums.length
};
console.log(removeElement([3, 2, 2, 3], 3))

// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))