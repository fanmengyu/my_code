//array.filter(function(currentValue,index,arr), thisValue)
//因此传入一个函数，返回一个数组

Array.prototype._fiflter = function(fn){
    if(typeof fn !== 'function'){
       console.error('参数必须是一个函数');
    }
    //res用来存放结果( 这是由于filter() 不会改变原始数组。)
    const res = [];
    for(let i = 0; i < this.length; i++){
        fn(this[i])&&res.push(this[i]);
    }
    return res;
}