/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxP = 0;
    let minPurchase = prices[0];
    for (const price of prices) {
        maxP = Math.max(0, maxP, price - minPurchase);
        minPurchase = Math.min(price, minPurchase);
    }
    return maxP;
}


console.log(maxProfit([7, 1, 5, 3, 6, 4],))