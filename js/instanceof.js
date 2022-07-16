//思路：1.首先获取左右的原型
//     2.然后一直循环判断对象（左边）的原型是否等于构造函数(右边)的原型
//       直到对象原型为null，因为原型链最终为null

function myinstanceof(left,right){
    let left_proto = Object.getPrototypeOf(left);
    let right_prototype = right.prototype;
    
    while(true){
        if(!left_proto) return false;
        if(left_proto === right_prototype) return true;
        left_proto = Object.getPrototypeOf(left_proto);
    }
}
