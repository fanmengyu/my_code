function magic(n, t, arr){
    arr.sort((a, b) => b - a);
    let res = n;
    let cost = t;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= cost) {
            res--;
            cost += t;
        }
    }
    return res;
}
let n = 6;
let t = 5;
let arr = [5,6,7,8,9,10]
console.log(magic(n,t,arr))


