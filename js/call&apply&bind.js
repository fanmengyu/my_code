// call函数实现
// 思路：1. 判断调用对象是否为函数，即使我们是定义在函数的原型上的，但是可能出现使用 call 等方式调用的情况。
//      2. 判断传入上下文对象是否存在，如果不存在，则设置为 window 。
//      3. 处理传入的参数，截取第一个参数后的所有参数。
//      4. 将函数作为上下文对象的一个属性。
//      5. 使用上下文对象来调用这个方法，并保存返回结果。
//      6. 删除刚才新增的属性。
//      7. 返回结果。
Function.prototype.myCall = function (context) {
  // 判断调用对象
  if (typeof this !== "function") {
    console.error("type error");
  }
  // 获取参数
  let args = [...arguments].slice(1),
    result = null;
  // 判断 context 是否传入，如果未传入则设置为 window
  context = context || window;
  // 将调用函数设为对象的方法
  context.fn = this;
  // 调用函数
  result = context.fn(...args);
  // 将属性删除，因为不能改写方法
  delete context.fn;
  return result;
};


//方法二：!!推荐
//核心是改变this的指向，先将this赋值给obj.fn（最后要记得删掉），然后调用函数
Function.prototype._myCall = function (obj) {
  if (typeof this !== "function") throw Error('error')
  let args = [...arguments].slice(1)
  obj = obj || window
  //使用symbol变量以避免变量重名，这是为了避免obj身上本来就有fn方法而引起覆盖
  let fn = Symbol('function')
  obj.fn = this
  let result = obj.fn(...args)
  delete obj.fn
  return result
}



// apply 函数实现
Function.prototype.myApply = function (context) {
  // 判断调用对象是否为函数
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  let fn = Symbol('function');
  let result = null;
  // 判断 context 是否存在，如果未传入则为 window
  context = context || window;
  // 将函数设为对象的方法
  context.fn = this;
  // 调用方法
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }
  // 将属性删除
  delete context.fn;
  return result;
};

// bind 函数实现（可以借助call或 apply），不执行所以返回的是一个函数
Function.prototype.myBind = function (context) {
  // 判断调用对象是否为函数
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  // 获取参数
  var args = [...arguments].slice(1),
    fn = this;
  return function Fn() {
    // 根据调用方式，传入不同绑定值
    return fn.apply(
      //判断是否发生了new构造函数 
      this instanceof Fn ? this : context,
      args.concat(...arguments)
    );
  };
};



//测试
var person = {
  fullName: function() {
      return this.firstName + " " + this.lastName;
  }
}
var person1 = {
  firstName:"Bill",
  lastName: "Gates",
}
var person2 = {
  firstName:"Steve",
  lastName: "Jobs",
}
// console.log(person.fullName._apply(person1))

Function.prototype.myBind = function(context){
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  // 获取参数
  var args = [...arguments].slice(1);
  let fn = this;

  //bind并不是立即调用，只是改变this指向
  return function Fn(){
    return fn.apply(this instanceof Fn ? this : context)
    args.concat(...arguments)
  }
}


//判断是否是函数；整理一下传入的参数，判断传入的上下文对象是否存在，不存在则设为window
//为上下文对象添加方法fn（Symbol声明避免重复）contex.fn = this;
//记录结果并返回，记得删除掉context.fn
//apply主要区别在于要判断一下参数是否存在,不存在的话执行时不传入相应的参数