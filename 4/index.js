/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    console.log(nums1, nums2)
    nums2.splice(0, 0, ...nums1);
    const mergeSortedArray = nums2.sort((a, b) => (a - b));
    console.log(mergeSortedArray)
    if (mergeSortedArray.length % 2 === 0) {
        const first = Math.floor(mergeSortedArray.length / 2) - 1
        const second = Math.ceil(mergeSortedArray.length / 2)
        return (mergeSortedArray[first] + mergeSortedArray[second]) / 2
    } else {
        const median = mergeSortedArray[Math.floor(mergeSortedArray.length / 2)];
        return median
    }
};

console.log(findMedianSortedArrays([1, 3, 8], [2]))