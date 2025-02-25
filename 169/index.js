/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const map = new Map();
    for (let num of nums) {
        if (map.has(num)) {
            var number = map.get(num);
            map.set(num, ++number);
        } else {
            map.set(num, 1)
        }
    }
    let [key, value] = [0, 0];
    for (let [k, v] of map.entries()) {
        if (v > value) {
            key = k;
            value = v;
        }
    }
    return key;
};


console.log(majorityElement([3, 2, 3]))