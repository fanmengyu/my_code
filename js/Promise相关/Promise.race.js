//思路：
// 该方法传入的参数是Promise实例数组，返回的是一个新的Promise对象
//状态和值都取决于第一个改变状态的promise

function PromiseRace(args){
    return new Promise((resolve,reject)=>{
        for(let i = 0; i < args.length; i++){
            args[i].then(resolve,reject);
        }
    })
}

//test
let p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject(5)
    }, 1000)
})
let p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(2)
    }, 2000)
})
let p3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(3)
    }, 3000)
})
PromiseRace([p3, p1, p2]).then(res => {
    console.log(res) // [3, 1, 2]
}, err => {
    console.log('error',err);
})