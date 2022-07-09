//按绝对值大小排序（绝对值从大到小），把小于零的替换，如果全部替换完了，k依旧大于0，则看剩下的k是奇数还是偶数，
//若是偶数，则最大值就是全正的和，若是奇数，则需要把最后一位变成负数
var largestSumAfterKNegations = function(nums, k) {
    nums.sort((a, b) => Math.abs(b) - Math.abs(a));//按绝对值从大到小排序
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0 && k > 0) {
            nums[i] *= -1;
            k--;
        }
    }
    if (k > 0 && k % 2) {
        nums[nums.length - 1] *= -1;
    }
    k = 0;
    return nums.reduce((a, b) => a + b);
}
console.log('...')
console.log(typeof null);