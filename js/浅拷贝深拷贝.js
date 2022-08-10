// 总体思路：
// 1.先判断是否是object类型
// 2.根据object类型判断是新建一个数组还是对象
// 3.遍历object，并进行赋值（深浅拷贝的区别！！深拷贝要判断object[key]是否是对象，是的话递归处理）


//浅拷贝
function myshallowCopy(object){
    //只拷贝对象,所以要先判断类型
    if(!object || typeof object !== "object") return;

    //根据object类型判断是新建一个数组还是对象
    let newObject = Array.isArray(object)?[]:{};

    //遍历object，并且判断是object的属性才拷贝
    for (let key in object){
        if(object.hasOwnProperty(key)){
            //hasOwnProperty获得对象非原型链上的属性
            newObject[key] = object[key];
        }
    }
    return newObject;
}

//深拷贝
function mydeepCopy(object){
    //只拷贝对象,所以要先判断类型
    if(!object || typeof object !== "object") return;
    //根据object类型判断是新建一个数组还是对象
    let newObject = Array.isArray(object)?[]:{};
    //遍历object，并且判断是object的属性才拷贝
    for (let key in object){
        if(object.hasOwnProperty(key)){
            newObject[key] = typeof object[key] === "object" ?  mydeepCopy(object[key]) : object[key];
        }
    }
    return newObject;
}

let obj1 = {  a: 0,
    b: {
       c: 0
       }
  };
let obj2 = mydeepCopy(obj1);
obj1.a = 1;
obj1.b.c = 1;
console.log(obj2);

//先判断是否是对象，且不能为空对象；若不是则返回
//判断是数组还是对象，初始化不同的内容
//for..in拷贝；注意避免拷贝原型链上的
//因此需要使用hasOwnProperty
//传入的参数是一个对象，返回一个新的拷贝对象


//深拷贝的一个主要区别在于如果对象的val还是一个对象，需要进行递归处理