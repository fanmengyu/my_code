let x = 9;
let y = 49;
function lihe(x,y){
    if (x < y) {
        [x, y] = [y, x];
    }
    if(x > 2* y) {
        return y;
    }
    return Math.floor((x + y) / 3);
}

console.log(lihe(x,y));