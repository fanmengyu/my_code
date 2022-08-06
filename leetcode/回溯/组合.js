var combine = function(n, k) {
    let res = [];
    let path = [];
    function backtracking(n, k, startIndex){
        if(path.length == k){
            res.push([...path]);
            return;
        }
        //i <= n - (k - path.length) + 1为剪枝操作
        for(let i = startIndex; i <= n - (k - path.length) + 1; i++){
            path.push(i);
            backtracking(n, k , i + 1);
            path.pop();
        }

    }
    backtracking(n, k, 1);
    return res;
};