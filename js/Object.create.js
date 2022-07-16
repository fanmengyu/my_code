//Object.create() 方法用于创建一个新对象，使用现有的对象来作为新创建对象的原型
//传入对象，返回一个新创建的对象的实例化对象，这个对象的显式原型指向传入的对象
//这样就可以让新创建对象的隐式原型=传入对象
function myCreate(obj){
    function F(){};
    F.prototype = obj;
    return new F();
}
