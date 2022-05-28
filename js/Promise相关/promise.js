function Promise(executor) {
    //添加属性
    this.PromiseState = 'pending';
    this.PromiseResult = null;
    //声明一个属性，callback（用于存放回调函数？）
    this.callback = {};
    //保存实例对象的this值
    const self = this;

    //reslove函数
    function resolve(data) {
        if (self.PromiseResult !== 'pending') return;
        //1.修改对象的状态(promiseState)
        self.PromiseState = 'fulfilled';
        //2.设置对象结果值（promiseResult）
        self.PromiseResult = data;
        //调用成功的回调函数
        self.callback.forEach(item => {
            item.onResolved(data);
        })
    }
    //reject函数
    function reject(data) {
        //判断状态，只有在pending时可以进行状态更改
        if (self.PromiseResult !== 'pending') return;
        //1.修改对象的状态(promiseState)
        self.PromiseState = 'rejected';
        //2.设置对象结果值（promiseResult）
        self.PromiseResult = data;
        //调用失败的回调函数
        self.callback.forEach(item => {
            item.onRejected(data);
        })

    }

    try {
        //同步调用执行器函数
        executor(resolve, reject);
    } catch (e) {
        reject(e);
    }
}

//添加then方法
Promise.prototype.then = function(onResolved, onRejected) {
    return new Promise((resolve, reject) => {
        //调用回调函数  PromiseState
        if (this.PromiseState === 'fulfilled') {
            let result = onResolved(this.PromiseResult);
            if (result instanceof Promise) {
                result.then(v => {
                    resolve(v);
                }, r => {
                    reject(r);
                })
            } else {
                resolve(result);
            }
        }
        if (this.PromiseState === 'rejected') {
            onRejected(this.PromiseResult);
        }
        //判断pending状态
        if (this.PromiseState === 'pending') {
            //保存回调函数
            this.callbacks.push({
                onResolved: onResolved,
                onRejected: onRejected
            });

        }

    })
} 