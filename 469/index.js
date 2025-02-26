/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    const result = [];
    for (let i = 0; i < nums1.length; i++) {
        // console.log('searc ', nums1[i])
        for (let j = nums2.indexOf(nums1[i]); j < nums2.length; j++) {
            const newNum = nums2[j];
            if (newNum > nums1[i]) {
                result.push(newNum)
                break;
            }
            if (j === nums2.length - 1) {
                result.push(-1)
            }
        }
        // console.log(result)
    }
    return result;
};


console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])) // [-1,3,-1]