/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let first = -1, last = -1;
    let lp = 0, rp = nums.length - 1;

    while (lp <= rp) {
        if (nums[lp] === target) {
            first = lp;
        }
        if (nums[rp] === target) {
            last = rp;
        }
        if (first !== -1 && last !== -1) {
            break;
        }
        if (first === -1) {
            lp++;
        }
        if (last === -1) {
            rp--;
        }
    }

    return [first, last];
};

console.log(searchRange([5,7,7,8,8,10], 8))