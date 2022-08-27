const { copyFileSync } = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let x, y, z;
const arr1 = [];
const arr2 = [];
let num = 1;
rl.on('line', function(line){
    if (num == 1){
        x = parseInt(line());
        num++;
    }else if(num == 2){
        y = parseInt(line());
        num++;
    }else if (num == 3) {
        z = parseInt(line());
    }
    while(num <= x + 3 && num > 3){
        arr1.push(line.split(' ').map(Number));
        num++;
    }
    while(num > x + 3 && num < x + y + 3) {
        arr2.push(line.split(' ').map(Number));
        num++;
    }
}).on('close', function(){
    let result = fun(x,y,z,arr1,arr2)
    result.forEach((item) => console.log(item.join(' ')));
})


function fun(x,y,z,arr1,arr2){
    let res = new Array(x).fill(0).map(() =>  new Array(z).fill(0));
    for(let i = 0 ;i < x; i++){
        for(let j = 0; j < z; j++){
            for(let k = 0; k < y; k++){
                res[i][j] += arr1[i][k] * arr2[k][j]
            }
        }
    }
    return res;
}
console.log(fun(2,3,2,[[1,2,3],[3,2,1]],[[1,2],[2,1],[3,3]]))