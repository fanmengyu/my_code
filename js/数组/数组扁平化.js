let arr = [1, [2, [3, 4, 5]]];
let arr2 = [2,3];

//方法一：递归
//思路：如果每一项还是一个数组，那就继续往下遍历
function flatten(arr){
    let res = [];
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            res = res.concat(flatten(arr[i]));
        }else{
            res.push(arr[i]);
        }
    }
    return res;
}

//方法二：reduce+递归
function flatten2(arr){
    return arr.reduce(function(pre, cur){
        return pre.concat(Array.isArray(cur)? flatten(cur) : cur)
    },[])
}

//方法三：扩展运算符和some
function flatten3(arr){
    while(arr.some(item => Array.isArray(item))){
        arr = [].concat(...arr);
    }
    return arr;
}


//方法四：split toString
function flatten4(arr){
    return arr.toString().split(',').map(Number);
}

//方法五：ES6中flat
function flatten5(arr){
    return arr.flat(Infinity);//这是由于flat默认只展开一层
}
//方法六：正则和JSON
function flatten6(arr){
    let str = JSON.stringify(arr);
    console.log(str)
    str = str.replace(/(\[|\])/g,'');
    str = '[' + str + ']';
    return JSON.parse(str);

}
console.log(flatten6(arr));

