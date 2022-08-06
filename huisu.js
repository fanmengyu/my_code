
function t(arr){
    let res = 0, path = [];
    function backtracking(arr,sum,start){
        let len = arr.length;
        if(sum == 60) {
            res += jiecheng(path.length) * jiecheng(arr.length - path.length);
            return;
        }    
        for(let i = start; i < len; ++i) {
            path.push(arr[i]);
            sum += arr[i];
            backtracking(arr,sum,i+1);
            path.pop(arr[i]);
            sum -= arr[i]
        }

    }
    backtracking(arr,0, 0);
    return res;
}

function jiecheng(n){
    let res = n;
    while(--n){
        res*=n;
    }
    return res;
}
console.log(t([10,20,30,30,40,50]))

var combinationSum2 = function(candidates, target) {
    let res = 0; 
    let path = [], len = candidates.length;
    candidates.sort((a,b)=>a-b);
    backtracking(0, 0);
    return res;
    function backtracking(sum, i) {
        if (sum === target) {
            res+=jiecheng(path.length)*jiecheng(len - path.length);
            return;
        }
        for(let j = i; j < len; j++) {
            const n = candidates[j];
            if(n > target - sum) break;
            path.push(n);
            sum += n;
            backtracking(sum, j + 1);
            path.pop();
            sum -= n;
        }
    }
};

// console.log(combinationSum2([10,20,30,30,40,50],60))