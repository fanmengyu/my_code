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
var maxSubArrayttttt = function(nums) {
    let result = -Infinity
    let sum = 0
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i]
        if(sum > result) {
            result = sum
        }
        if(sum < 0) {
            sum = 0
        }
    }
    return result
};