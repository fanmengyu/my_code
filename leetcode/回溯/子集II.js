var subsetsWithDup = function(nums) {
    let path = [], res = [];
    nums.sort((a,b) => a - b);
    function backtracking(startIndex, used){
            res.push([...path]);
            for(let i = startIndex; i < nums.length; i++){
                if(i > 0 && nums[i] == nums[i - 1] && !used[i - 1]) continue;
                path.push(nums[i]);
                used[i] = true;
                backtracking(i + 1, used);
                used[i] = false;
                path.pop();
            }
        }
    backtracking(0, []);
    return res;
};
console.log(subsetsWithDup([4,4,4,1,4]))