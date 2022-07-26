var minOperations = function(nums, numsDivide) {
    nums.sort((a,b) => a - b);
    for(let i = 0; i < nums.length; i++) {
        if(i > 0 && nums[i] == nums[i - 1]){
            continue;
        }
        if(allDivide(nums[i],numsDivide)) {
            return i;
        }
    }
   return -1
};
function  allDivide(num,numsDivide){
    for (const i of numsDivide) {
        if(i % num !== 0) {
            return false;
        }
    }
    return true;
}
let nums = [4,3,6], numsDivide = [8,2,6,10];
console.log(minOperations(nums,numsDivide))