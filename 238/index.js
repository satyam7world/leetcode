/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const result = []
    const left = [];
    let right = [];

    let proLeft = 1;
    let proRight = 1;
    for (let i = 0; i < nums.length; i++) {
        left.push(proLeft)
        proLeft *= nums[i]

        // right.unshift(proRight);
        right.push(proRight);
        proRight *= nums[nums.length - 1 - i]
    }

    right = right.reverse()

    console.log(left, right)

    for (let i = 0; i < nums.length; i++) {
        const pro = left[i] * right[i];
        result.push(pro)
    }

    return result;
};

console.log(productExceptSelf([1, 2, 3, 4]))
