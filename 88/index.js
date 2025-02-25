// UnSolved
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
    console.log('nums1 ', nums1);
    console.log('nums2 ', nums2)
    let rem = [];
    let rp = 0;
    for (let i = 0; i < nums1.length; i++) {
        if (i < m) {
            if (nums1[i] > nums2[rp]) {
                rem = nums1.slice(i, -1 * m)
                nums1[i] = nums2[rp];
                rp++;
            }
        } else {
            nums1[i] = Math.max(nums2[-m + i], rem?.[0])
        }
    }
    console.log('r num1', nums1)
    console.log(rem)
};

// merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
merge([4, 5, 6, 0, 0, 0 ], 3, [2, 5, 6], 3)
// merge([1], 1, [], 0)