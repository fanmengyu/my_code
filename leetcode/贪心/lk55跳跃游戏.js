var canJump = function(nums) {
    let count = 0;
    if(nums.length == 1) return true;
    for(let i = 0; i <= count; i++) {
        count = Math.max(count, i + nums[i]);
        console.log(count);
        if (count >= nums.length - 1) return true;
    }
    return false;
};
let nums = [2,0];
console.log(canJump(nums));