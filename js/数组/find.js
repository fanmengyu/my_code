//find找到数组中符合的元素并返回第一个符合的元素
//array.find(function(currentValue, index, arr),thisValue)
//find()方法的回调函数可以接受三个参数，依次为当前的值、当前的位置和原数组

Array.prototype.find_ = function(fn,target = window){
    if(typeof fn !== 'function'){
        console.error('参数必须是一个函数');
     }
    let res = undefined
    for(let i = 0 ; i<this.length;i++){
      if(fn.call(target,this[i],i,this)){
        res = this[i]
      }
    }
    return res
}

export function find(arr, callback) {
    for (let i = 0; i < arr.length; i++){
      let res = callback(arr[i], i)
      if (res) {
        // 返回 满足条件的第一个元素
        return arr[i]
      }
    }
    // 如果没有遇到满足条件的就返回undefined
    return undefined
  }
  

  Array.prototype.myFind = function(callbackFn, thisArg) {
    if (typeof callbackFn !== 'function') throw ('callbackFn参数必须是函数');
    let element = this,
    len = element && element.length || 0;
    if (!thisArg) thisArg = element;
    for (let index = 0; index < len; index++) {
    if (callbackFn.call(thisArg, element[index], index, element)) {
     return element[index];
    }
    }
    return
   }