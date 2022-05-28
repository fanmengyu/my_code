function curry(fn,...args){
    let fnLen = fn.length,
        argsLen = args.length;
    //对比函数的参数和当前传入参数
    //若参数不够就继续递归返回curry
    //若参数够就调用函数返回相应的值
    if(fnLen > argsLen){
      return function(...arg2s){
        return curry(fn,...args,...arg2s)
      }
    }else{
      return fn(...args)
    }
  }

//实现 add(1)(2)(3)

function add (...args) {
    //求和
    return args.reduce((a, b) => a + b)
}
function currying (fn) {
    let args = []
    return function temp (...newArgs) {
        if (newArgs.length) {
            args = [
                ...args,
                ...newArgs
            ]
            return temp
        } else {
            let val = fn.apply(this, args)
            args = [] //保证再次调用时清空
            return val
        }
    }
}
let addCurry = currying(add)
console.log(addCurry(1)(2)(3)(4, 5)())  //15
console.log(addCurry(1)(2)(3, 4, 5)())  //15
console.log(addCurry(1)(2, 3, 4, 5)())  //15