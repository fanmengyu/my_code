//Promise.reject(reason)方法也会返回一个新的 Promise 实例，该实例的状态为rejected。
//Promise.reject()方法的参数，会原封不动地作为reject的理由，变成后续方法的参数
function myPromiseReject(promise){
    return new Promise((resovle, reject) => {
        reject(promise);
    })
}