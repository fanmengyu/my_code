Promise.prototype.myFinally = function(callback) {
    this.then(value => {
      return Promise.resolve(callback()).then(() => {
        return value;
      })
    }, error => {
      return Promise.resolve(callback()).then(() => {
        throw error;
      })
    })
  }

  let p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject(5)
    }, 1000)
})
 
Promise.reject(3).myFinally(() => {
    console.log('1111')
})

//阮一峰
Promise.prototype.finally = function (callback) {
    let P = this.constructor;
    return this.then(
      value  => P.resolve(callback()).then(() => value),
      reason => P.resolve(callback()).then(() => { throw reason })
    );
  };