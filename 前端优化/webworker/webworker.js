//主线程，即直接引入到html的js文件

//创造webworker实例对象
let worker = new Worker('worker.js');
worker.onmessage = function(event) {
    //通过onmessage监听，主线程收到子线程的消息
}

//主线程向子线程发送消息
worker.postMessage({
    type:'start',
    value:12345
})