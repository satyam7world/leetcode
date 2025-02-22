// Unsolved

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = function (nums) {
    const missing = [];
    nums = nums.sort((a, b) => (a - b))
    for (let i = 0; i < nums.length - 1; i++) {
        const nextValid = nums[i] === nums[i + 1] || nums[i] + 1 === nums[i + 1];
        // console.log(nextValid, nums[i], i)
        if (!nextValid) {
            const missingInitial = nums[i] + 1;
            missing.push(missingInitial)
            for (let j = missingInitial + 1; j < nums[i + 1]; j++) {
                // console.log('found , ', j)
                missing.push(j)
            }
        }
    }
    return missing
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]))