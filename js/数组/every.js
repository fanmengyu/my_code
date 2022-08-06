


Array.prototype.every_ = function(fn,target=window){
    if(typeof fn !== 'function'){
        console.error('参数必须是一个函数');
     }
    let res = true;
    for (let i = 0; i < this.length; i++) {
        if(!fn(this[i])){
          res = false;
        }
    }
    return res;
  }

  