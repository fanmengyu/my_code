var findSubsequences = function(nums) {
    nums.sort((a, b) => a - b);

    function backtracking(k, startIndex, sum){
        if(path.length === k && sum === n){
            res.push([...path]);
        }
        for(let i = startIndex; sum + i <=n && i <= 9-(k - path.length) +1; i++){
            path.push(i);
            sum += i;
            backtracking(k, i + 1, sum);
            sum -= i;
            path.pop();
        }
    }

};