var maxSubArray = function(nums) {
    //动态规划
    let pre = 0;
    let res = nums[0];
    for (let i = 0; i < nums.length; i++) {
        pre = Math.max(nums[i], pre + nums[i]);
        res = Math.max(res, pre);
    }
    return res;
};
//
var maxSubArray = function(nums) {
    let result = -Infinity
    let count = 0
    for(let i = 0; i < nums.length; i++) {
        count += nums[i]
        if(count > result) {
            result = count
        }
        if(count < 0) {
            count = 0
        }
    }
    return result
};