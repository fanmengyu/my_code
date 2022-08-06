//「快乐数」 定义为：

//对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
//然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
//如果这个过程 结果为 1，那么这个数就是快乐数。

var isHappy = function(n) {
    let set = new Set();
    let totalCount;
    while(totalCount !== 1) {
        //''+ 可以把数字转化为字符串
        let arr = (''+(totalCount || n)).split('');
        //求每个位置上数字的平方和（转化为数组然后reduce）
        totalCount = arr.reduce((total, num) => {
            return total + num * num
        }, 0)
        if (set.has(totalCount)) {
            return false;
        }
        set.add(totalCount);
    }
    return true;
};