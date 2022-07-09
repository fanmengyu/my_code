var jump = function(nums) {
    let curDis = 0; //记录当前最大范围
    let nexDis = 0; //记录下一步最大范围
    let res = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        nexDis = Math.max(nexDis, i + nums[i]);
        if (i === curDis) {
            //如果走到了当前最大范围处，则更新，步数也要加1
            curDis = nexDis;
            res++;
        }
    }
    return res;
};