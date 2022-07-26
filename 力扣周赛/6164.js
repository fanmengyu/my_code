var maximumSum = function(nums) {
    let len = nums.length;
    let map = new Map();
    for(let i = 0; i < len; i++) {
        let everySum = getEverySum(nums[i]);
        if(map.has(everySum)) {
            map.set(everySum,map.get(everySum).concat(nums[i]));
        }else{
            map.set(everySum, [nums[i]]);
        }
    }
    let arr = Array.from(map.values());
    let newArr = [];
    for(const i of arr) {
        if(i.length > 1) {
            i.sort((a,b) => b - a)
            newArr.push(i[0] + i[1]);
        }
    }
    if(newArr.length === 0){
        return -1;
    }
    return Math.max(...newArr);
};
function getEverySum(x){
    if (x<10){
        return x;
    }
    return x%10+getEverySum(parseInt(x/10));
}

let nums = [368,369,307,304,384,138,90,279,35,396,114,328,251,364,300,191,438,467,183];
console.log(maximumSum(nums));