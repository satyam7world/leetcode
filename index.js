// Test cases using Node.js's built-in assert module (no extra library needed)
const assert = require('assert');
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function (intervals) {
    const result = [];


    return result;
};





function testMerge() {
    assert.deepStrictEqual(merge([[1, 3], [2, 6], [8, 10], [15, 18]]), [[1, 6], [8, 10], [15, 18]], "Test Case 1 Failed");
    assert.deepStrictEqual(merge([[1,4],[4,5]]), [[1,5]], "Test Case 2 Failed");
    assert.deepStrictEqual(merge([[1,3],[2,2]]), [[1,3]], "Test Case 3 Failed");
    assert.deepStrictEqual(merge([[1,4],[2,3]]), [[1,4]], "Test Case 4 Failed");
    assert.deepStrictEqual(merge([[2,3],[4,5],[6,7],[8,9],[1,10]]), [[1, 10]], "Test Case 5 Failed");
    assert.deepStrictEqual(merge([]), [], "Test Case 6 Failed (Empty)");
    assert.deepStrictEqual(merge([[1,2]]), [[1,2]], "Test Case 7 Failed (Single)");
    assert.deepStrictEqual(merge([[1,2],[3,4]]), [[1,2],[3,4]], "Test Case 8 Failed (No Overlap)");
    assert.deepStrictEqual(merge([[1,5],[2,3],[4,6]]), [[1,6]], "Test Case 9 Failed (Multiple Merges)");



    console.log("All test cases passed!");
}

testMerge(); // Run the tests

// Your original console.log remains for manual testing if needed:
// console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]));