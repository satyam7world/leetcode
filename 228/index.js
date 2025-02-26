// UnSolved
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    let start = nums[0];
    const summary = [];
    for (let i = 1; i < nums.length; i++) {
        if (start === nums[i]) {
            start = nums[i];
            continue
        } else {
            summary.push(start);
        }
    }
    console.log(summary)
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7]))