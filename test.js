let a = 'efgyiffxoonftmmvd';
let b = 'exwzdcwjsttuhsxrcpzplpnfqxqsqtlfctdkgacejitayoafucmfxxhkxyixxykndchyjc';

if (a.length < b.length) {
    [a, b] = [b, a];
}
let res = '';

for (let l = 0; l < b.length; l++) {
    for (let r = l + 1; r <= b.length; r++) {
        if (r - l > res.length && a.indexOf(b.slice(l, r)) !== -1) {
            res = b.slice(l, r);
        }
    }
}


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const inputArr = [];//存放输入的数据
rl.on('line', function (line) {
    inputArr.push(line.split(' '));//注意为字符串数组
}).on('close', function () {
    console.log(maxProducct(inputArr))//调用函数并输出
})

function maxProducct(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let arr1 = arr[j].split('');
            let flag = arr1.every((item) => {
                return arr[i].indexOf(item) == -1;
            })
            if (flag) {
                res = Math.max(res, arr1.length * arr[i].length);
            }
        }
    }
    return res;
}
console.log(maxProducct(["a", "ab", "abc", "cd", "bcd", "abcd"]))

