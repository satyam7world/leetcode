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
        const dp = new Array(amount + 1).fill(Infinity);
        dp[0] = 0;
        for (let i = 1; i <= amount; i++) {
            for (const coin of coins) {
                if (coin <= i) {
                    dp[i] = Math.min(dp[i], dp[i - coin] + 1);
                }
            }
        }
        return dp[amount] === Infinity ? -1 : dp[amount];
    }
    return -1
};

console.log(coinChange([1, 2, 5], 11))
// console.log(coinChange([2], 3))