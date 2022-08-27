const { copyFileSync } = require("fs");

function doFun(str){
    str = str.split('');
    let yuanyin = ['a','e','i','o','u','A','E','I','O','U']
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '') {
            continue;
        }else if (yuanyin.indexOf(str[i]) > -1) {
            //若为元音则变为大写
            str.splice(i,1,str[i].toUpperCase())
        } else {
            str.splice(i,1,str[i].toLowerCase())
        }
    }
    return str.join('');
}
console.log(doFun('Who Love Solo'))
