
onmessage = function(event) {
    //收到
    const data = event.data;
    postMessage({
        //回传消息给主线程

    })
}

// postMessage({
//     type:'debug',
//     message:'Starting processig'
// })