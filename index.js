/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function (nums) {
    console.log(nums)
    const result = []
    let lpi = 0;
    let rpi = nums.length - 1;
    while (lpi < rpi) {
        const lpv = Math.pow(nums[lpi], 2);
        const rpv = Math.pow(nums[rpi], 2);
        if (lpv > rpv) {
            result.push(rpv);
            lpi++
        } else {
            result.push(lpv);
            rpi--
        }
        console.log(lpi, rpi)
    }
    return result
};


console.log(sortedSquares([-4, -1, 0, 3, 10]))