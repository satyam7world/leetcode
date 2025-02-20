/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let lpi = 0;
    let rpi = nums.length - 1;
    const result = [];
    while (lpi < rpi) {
        const lpv = Math.pow(nums[lpi], 2);
        const rpv = Math.pow(nums[rpi], 2);
        if (lpv > rpv) {
            result.push(lpv);
            lpi++;
        } else {
            result.push(rpv);
            rpi--;
        }
        console.log(lpv, rpv)
        console.log(lpi, rpi)
    }
    return result.reverse();
};

console.log(sortedSquares([-4, -1, 0, 3, 10]))