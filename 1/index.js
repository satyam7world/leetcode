

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        // console.log(nums, target)
        const req = target - nums[i];
        // console.log(req, nums.indexOf(req))
        const index = nums.indexOf(req);
        if(index !== -1 && index !== i) {
            return [i, nums.indexOf(req)]
        }
    }
    return []
};

// console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))
