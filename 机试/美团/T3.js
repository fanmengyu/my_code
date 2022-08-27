// let res = 0;
// let dp = new Array(n).fill(0);
// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] == 0) {
//         //必须删掉
//         dp[i] = 0;      
//     }else{
//         dp[i] = Math.max(dp[i - 1],)
//     }
// }

//从左到右统计比自己大的。从右到左比自己小的


function sum(a,b){
    let res = a;
    let sum = a;
    while(--b){
      res = Math.sqrt(res);
      sum += res;
    }
    return sum.toFixed(2);
  }


function flower(m,n){
    let res = [];
    for(let i = m; i <= n; i++){
        let arr = String(i).split('').map(Number);
        let sum = 0;
        arr.forEach(item => {
            sum +=item*item*item;
        })
        if(sum == i) {
            res.push(i);
        }
    }
    if(res.length == 0){
        return 'no';
    }else{
        return res.join(' ');
    }
}


function t(arr){
    let res = 0, path = [], sum = 0;
    function backtracking(arr,start){
        let len = arr.length;
        if(sum == 60) {
            res += jiecheng(path.length) * jiecheng(arr.length - path.length);
            return;
        }    
        for(let i = start; i < len; ++i) {
            path.push(arr[i]);
            sum += arr[i];
            backtracking(arr,start+1);
            path.pop(arr[i]);
            sum -= arr[i]
        }

    }
    backtracking(arr, 0);
    return res;
}

function jiecheng(n){
    let res = n;
    while(--n){
        res*=n;
    }
    return res;
}
// console.log(jiecheng(4));

// console.log(t([10,20,30,30,40,50]))
