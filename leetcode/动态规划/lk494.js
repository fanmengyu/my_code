var findTargetSumWays = function(nums, target) {
    //既然为target，那么一定可以分为左右两个部分 且满足 left + right = sum; left - right = target
    //则left = (target + sum)/2
    const sum = nums.reduce((a, b) => a + b);
    if(Math.abs(target) > sum) return 0;//target太大，即使都添+也无法达到
    if((target + sum) % 2) return 0; //left不为整数，因此也不符合题意
    const halfSum = (target + sum) / 2;
    //01背包可以转化为容量为left的背包，dp[i]的意思是装满容量i的背包有几种方法
    let dp = new Array(halfSum + 1).fill(0);
    dp[0] = 1;//可以理解为装满容量0的背包，有一种方法就是什么也不装

    for (let i = 0; i < nums.length; i++) {
        for (let j = halfSum; j >= nums[i]; j--) {
            dp[j] += dp[j - nums[i]];
        }
    }
    return  dp[halfSum];
};