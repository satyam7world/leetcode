// UnSolved
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    const diff = [];
    for (let i = 0; i < temperatures.length; i++) {
        const currentTemp = temperatures[i];
        for (let j = i + 1; j < temperatures.length; j++) {
            const idealTemp = temperatures[j];
            // console.log(idealTemp, currentTemp)
            if (idealTemp > currentTemp) {
                diff.push(j - i);
                break;
            }
        }
    }
    const rem = temperatures.length - diff.length;
    if (rem >= 1) {
        diff.splice(diff.length, 0, ...(new Array(rem).fill(0)))
    }
    return diff;
};

console.log(dailyTemperatures([55, 38, 53, 81, 61, 93, 97, 32, 43, 78])) // [3,1,1,2,1,1,0,1,1,0]
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])) // [1,1,4,2,1,1,0,0]
console.log(dailyTemperatures([30, 40, 50, 60])) // [1,1,1,0]
console.log(dailyTemperatures([30, 60, 90])) // [1,1,0]
