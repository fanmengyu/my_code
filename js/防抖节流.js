//防抖函数
//思路：1.传入的是回调函数以及等待的事件wait
//     2.采用定时器来完成，要先判断是否已经存在定时器，如果已有要重置（通过timer来判断）
//     3.要记得改变this和传入arguments
//防抖函数的代码获取 this 和 参数，是为了让 debounce函数最终返回的函数 this指向不变以及依旧能接受到参数。


function debounce(fn, wait) {
    let timer = null;
    return function () {
        let context = this,
        args = arguments;
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        //设置定时器
        timer = setTimeout(()=>{
            fn.apply(context,args);
        },wait);
    }
}

//节流函数
//思路：1.传入想要节流的函数和等待时间，返回一个函数
//     2.使用时间戳实现，比较当前时间和前一次执行相差的时间是否大于wait，若大于，则将当前时间赋予给前一次
//     3.绑定this和arguments

function throttle(fn,wait){
    let previous =  Date.now();

    return function(){
        let context = this,
        args = arguments,
        now = Date.now() ;
        // 如果两次时间间隔超过了指定时间，则执行函数。
        if(now - previous >= wait){
            previous = Date.now();
            return fn.apply(context,args);
        }
    }

}