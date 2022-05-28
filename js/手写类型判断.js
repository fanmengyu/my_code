// 1.主要思想是利用typeof，但是由于null array object 都会被判断为object，则需要进一步处理
// 2.首先要考虑是null的情况

var a =[1,2,3];
function getType(value){
    //判断是否是null
    if(value === null){
        return value + "";
    }

    if(typeof value === "object"){
        //判断是数组还是object，借助Object.prototype.toString.call
        let valueClass = Object.prototype.toString.call(value),
        //Object.prototype.toString.call返回的结果是一个数组[object Object(/Array)]
        type = valueClass.split(" ")[1].split("");
        // console.log(type)//[ 'A', 'r', 'r', 'a', 'y', ']' ]
        type.pop();//由于我们要的是第二个结果，所以pop()第一个
        return type.join("").toLowerCase();
    }else{
        //判断是函数或者基本数据类型的情况
        return typeof value;
    }
}

console.log(Object.prototype.toString.call(a).split(" ")[1].split(""))
