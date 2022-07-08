//完全平方数
var numSquares = function(n) {
    //多重背包问题，背包容量为n
    let dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 0; i <= n; i++) {
        for (let j = 1; j * j <= i; j++) {
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
        }
    }
    return dp[n];

};