var minimumOperations = function (nums) {
    let result = 0;
    nums.sort((a,b) => a - b);
    function quzero(nums){
       return nums.join('').replace(/\b(0+)/gi,'').split('');
    }
    while(nums[nums.length-1] !== 0) {
        result++;
        let m = minNum(nums);
        for(let i = 0; i < nums.length; i++) {
            if(nums[i] !== 0) {
                nums[i] -= m;
            }
        }
    }
    return result;
};

function minNum(arr){
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0){
            return arr[i];
        }
    }
}
// console.log(minimumOperations(nums = [1, 5, 0, 3, 5]));

console.log(['a','d','b'].sort())