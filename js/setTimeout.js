//使用setInterval实现setTimeout
//要注意setTimeout中回调函数只执行一次，所以注意要清除定时器
function mySetTimeout(fn, delay){
    let timer = null;
    timer = setInterval(()=>{
        clearInterval(timer);
        fn();
    },delay);
    return () => clearInterval(timer);
}

//测试
function fn(){
    console.log('1111')
}
console.log(mySetTimeout(fn,3000))