//思路：
// 该方法传入的参数是Promise实例数组，返回的是一个新的Promise对象
//状态和值都取决于第一个改变状态的promise

Promise.race = function(args){
    return new Promise((resolve,reject)=>{
        for(let i = 0; i < args.length; i++){
            args[i].then(resolve,reject);
        }
    })
}
