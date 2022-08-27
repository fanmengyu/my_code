const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var words;//存放输入的数据
rl.on('line', function(line){
    words = line.split(' ')//注意为字符串数组
}).on('close', function(){
    console.log(soution(words))//调用函数并输出
})



function soution(words) {
    let res = [];
    let word = words[0];
    for(let s of word) {
        if(words.every(m => m.includes(s))) {
            words = words.map(item => item.replace(s, ''));
            res.push(s);
        }
    }
    return res;
}
let words = ['cool','lock','cook'];
console.log(soution(words));
