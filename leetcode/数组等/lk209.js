var minSubArrayLen = function(target, nums) {
    let sum = 0;
    if (nums.reduce((a, b) => a + b) < target) {
        return 0;
    }
    let l = 0, r = 0;
    let res = Infinity;
    while (r < nums.length && l <= r) {
        sum += nums[r];
        //窗口收缩
        while(sum >= target) {
            res = Math.min(res, r - l + 1);
            sum -= nums[l++];  
            console.log(res);         
        }
        r++;
    }
    return res;
}

console.log(minSubArrayLen(7,[2,3,1,2,4,3]))