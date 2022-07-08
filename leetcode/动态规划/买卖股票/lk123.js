var maxProfit = function(prices) {
    let dp = new Array(prices.length + 1).fill(0).map(()=>new Array(5).fill(0));
    dp[0][1] = -prices[0];
    dp[0][3] = -prices[0];
    for (let i = 1; i < prices.length; i++) {
        dp[i][0] = dp[i - 1][0];//什么也不做
        dp[i][1] = Math.max(dp[i - 1][0] - prices[i], dp[i - 1][1]);//第一次买入
        dp[i][2] = Math.max(dp[i - 1][1] + prices[i], dp[i - 1][2]);//第一次卖出
        dp[i][3] = Math.max(dp[i - 1][2] - prices[i], dp[i - 1][3]);//第二此买入
        dp[i][4] = Math.max(dp[i - 1][3] + prices[i], dp[i - 1][4]);//第二次卖出
    }
    return dp[prices.length - 1][4];
};