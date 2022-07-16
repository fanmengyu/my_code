//map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
//因此传入的是一个函数，输出一个数组
Array.prototype._map = function(fn){
    if(typeof fn !== 'function'){
        throw Error('参数必须是一个函数');
    }
    let res = [];
    for(let i = 0; i < this.length; i++){
        res.push(fn(this[i]));
    }
    return res;
}

