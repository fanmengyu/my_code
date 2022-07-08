var rob = function (nums) {
    //考虑两种情况，第一种不包含尾；第二种不包含首（这样做的目的是避免同时偷到首尾）
    //然后取两者中较大的一个即可
    let len = nums.length;
    //为了保证区间有意义，做剪枝处理
    if(len == 0) return 0;
    if(len == 1) return nums[0];
    let res1 = robRange(0, len - 1);
    let res2 = robRange(1, len);
    return Math.max(res1, res2);

    function robRange(start, end) {
        if(start == end) return nums[start];
        //左闭右开
        const dp = Array(nums.length).fill(0);
        dp[start] = nums[start]
        dp[start + 1] = Math.max(nums[start], nums[start + 1])
        for (let i = start + 2; i < end; i++) {
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
        }
        return dp[end - 1];
    }
};
console.log(rob([2,3,2]));