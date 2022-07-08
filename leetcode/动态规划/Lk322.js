var coinChange = function(coins, amount) {
    //多重背包问题，背包容量为amount
      if(!amount) {
        return 0;
    }
    let dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 0; i < coins.length; i++){
        //先遍历物品再背包
        for (let j = coins[i]; j <= amount; j++) {
            dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1)
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];

};