//setTimeout模拟setInterval
//setInterval每隔一段时间将事件加入事件队列中去，
//只有当当前的执行栈为空的时候，才能去从事件队列中取出事件执行。

//思路：设置递归可以做到定时器一直执行

function mySetInterval(fn, timeout) {
    //控制器，控制定时器是否继续执行
    var timer = { flag: true };
    //设置递归函数，模拟定时器执行（递归可以做到一直执行）
    function interval() {
        if (timer.flag) {
            fn();
            setTimeout(interval, timeout);
        }
    }
    //启动定时器（为了让fn放入任务队列）
    setTimeout(interval,timeout);
    //返回控制器
    return timer;
}

