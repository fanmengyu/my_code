var numberOfPairs = function(nums) {
    let len = nums.length;
    let map = new Map();
    for(let i = 0; i < len; i++) {
        if(map.has(nums[i])) {
            map.set(nums[i],map.get(nums[i])+1);
        }else{
            map.set(nums[i], 1);
        }
    }
    let pair = 0;
    for(const i of map.values()) {
        pair += Math.floor(i/2);
    }
    let res = len - pair * 2;
    return [pair, res].map(Number);
};

let nums = [1,3,2,1,3,2,2];
console.log(numberOfPairs(nums));