var wordBreak = function(s, wordDict) {
//多重背包问题
//s相当于背包，字典相当于物品
let dp = new Array(s.length + 1).fill(false);
dp[0] = true;
    for (let i = 0; i <= s.length; i++) {
        //左闭右开
        for (let j = 0; j < wordDict.length; j++) {
            //每次只需要判断(j,i)区间的子串是否出现在字典里
            if (i >= wordDict[j].length) {
                //若小于则说明wordDict[j]太长，可以跳过
                if (s.slice(i - wordDict[j].length, i) === wordDict[j] && dp[i - wordDict[j].length]) {
                    dp[i] = true;
                }
            }
        }
    }
    return dp[s.length];
};