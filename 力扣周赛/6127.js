var repeatedCharacter = function(s) {
    let map = new Map();
    for(let i = 0; i < s.length; i++) {
        if(!map.has(s[i])) {
            map.set(s[i], 1);
        }else {
            return s[i];
        }
    }
};


var countExcellentPairs = function(nums, k) {
    nums = [...new Set(nums)];
    let res = 0;
    for(let i = 0; i< nums.length; i++) {
        for(let j = 0; j< nums.length; j++) {
            if(anweihuo(nums[i], nums[j]) + anweiyu(nums[i],nums[j]) >= k) {
                res ++;
            }
        }
    }
    return res;
};
function anweihuo(a, b){
    let n = a | b;
    if(n<0){
        n = n>>>0;//get到新技能，该行命令能够获取到负数的补码
    }
    var res = n.toString(2);
    var count = 0;
    for(var i = 0; i <res.length; i++){
        if(res[i] == 1){
            count++;
        }
    }
    return count;
}

function anweiyu(a,b){
    let n = a & b;
    if(n<0){
        n = n>>>0;//get到新技能，该行命令能够获取到负数的补码
    }
    var res = n.toString(2);
    var count = 0;
    for(var i = 0; i <res.length; i++){
        if(res[i] == 1){
            count++;
        }
    }
    return count;

}

// console.log(countExcellentPairs([1,2,3,1],3))

console.log(5>>1)