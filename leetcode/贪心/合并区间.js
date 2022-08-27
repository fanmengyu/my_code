 var merge = function (intervals) {
    //合并区间
    intervals.sort((a, b) => a[0] - b[0]);
    let res = [];
    res.push(intervals[0])
    for (let i = 1; i < intervals.length; i++) {
        if(intervals[i][0] <= intervals[i - 1][1]) {
            intervals[i][0] = intervals[i - 1][0];
            intervals[i][1] =  Math.max(intervals[i][1], intervals[i - 1][1])
            //前一个区间和当前区间有重叠，则两个都需要删掉，替换为新的区间
            res.pop();
            res.push([intervals[i - 1][0],intervals[i][1]])
        }else {
            res.push(intervals[i])
        }
    }
    return res

};