
  Array.prototype._reduce = function(fn, initValue){
    if(typeof fn !== 'function'){
        console.error('参数必须是一个函数');
     }
     res = initValue? initValue : 0;
     for (let i = 0; i < this.length; i++) {
        res = fn(res, this[i]);
     }
     return res;

  }

  //完整版
  Array.prototype.myReduce = function(callbackFn, initialValue) {
    if (typeof callbackFn !== 'function') throw ('callbackFn参数必须是函数');
    let element = this,
     len = element.length || 0,
     index = 0,
     result;
    if (arguments.length >= 2) {
     result = arguments[1];
    } else {
     while (index < len && !(index in element)) index++;
     if (index >= len) throw new TypeError('Reduce of empty array ' + 'with no initial value');
     result = element[index++];
    }
   
    while (index < len) {
     if (index in element) result = callbackFn(result, element[index], index, element);
     index++;
    }
    return result;
   }

  console.log([1,2,3].myReduce((a,b) => a+b))