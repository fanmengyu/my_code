//有时需要将现有对象转为 Promise 对象，Promise.resolve()方法就起到这个作用。
//参数有可能是具有then方法的对象
Promise.resolve = function(value) {
	return new Promise((resolve, reject) => {
		if(value instanceof Promise) {
			value.then(resolve, reject)
		} else {
			resolve(value)
		}
	})
}

myPromise.resolve = function (value) {
    // 如果这个值是一个 promise ，那么将返回这个 promise 
    if (value instanceof myPromise) {
        return value;
    } else if (value instanceof Object && 'then' in value) {
        // 如果这个值是thenable（即带有`"then" `方法），返回的promise会“跟随”这个thenable的对象，采用它的最终状态；
        return new myPromise((resolve, reject) => {
            value.then(resolve, reject);
        })
    }
    // 否则返回的promise将以此值完成，即以此值执行`resolve()`方法 (状态为fulfilled)
    return new myPromise((resolve) => {
        resolve(value)
    })
}