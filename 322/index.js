/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    if (amount === 0) {
        return 0;
    }
    const maxCoin = Math.max(...coins);
    const req = amount % maxCoin;
    if (coins.includes(req)) {
        return Math.floor(amount / maxCoin) + 1
    } else {

    }
    return -1
};

// console.log(coinChange([1, 2, 5], 11))
console.log(coinChange([2], 3))