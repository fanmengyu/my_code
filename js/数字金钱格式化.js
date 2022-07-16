function formatMoney(num) {
    num = num.toString().split('');
    let res = [];
    let count = 0;
    for (let i = num.length - 1; i >= 0; i--) {
        res.unshift(num[i]);
        count++;
        if (count % 3 == 0 && i !== 0) {
            res.unshift(',')
        }
    }
    return res.join('');
}

//优化版本
let format = n => {
    let num = n.toString()
    let len = num.length
    if (len <= 3) {
        return num
    } else {
        let remainder = len % 3
        if (remainder > 0) { // 不是3的整数倍
            return num.slice(0, remainder) + ',' + num.slice(remainder, len).match(/\d{3}/g).join(',')
        } else { // 是3的整数倍
            return num.slice(0, len).match(/\d{3}/g).join(',')
        }
    }
}
// console.log(format(1232323) ) // '1,232,323'



//带小数版本
let format2 = n => {
    let num = n.toString() // 转成字符串
    let decimals = '';
    let int = '';
    // 判断是否有小数
    if (num.indexOf('.') > -1) {
        int = num.split('.')[0];
        decimals = num.split('.')[1];
    } else {
        int = num
    }
    let len = int.length
    if (len <= 3) {
        return num
    } else {
        let temp = ''
        let remainder = len % 3
        decimals ? temp = '.' + decimals : temp
        if (remainder > 0) { // 不是3的整数倍
            return int.slice(0, remainder) + ',' + int.slice(remainder, len).match(/\d{3}/g).join(',') + temp
        } else { // 是3的整数倍
            return int.slice(0, len).match(/\d{3}/g).join(',') + temp
        }
    }
}
console.log(format2(12323562.33))



