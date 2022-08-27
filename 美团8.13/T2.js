function puke(n, arr){
    let real = Array.from({length: arr.length},(v, i) => ++i);
    let res = [];
    for (let i = 0; i < n; i++) {
        let t = real.shift();
        real.push(t);
        let k = real.shift();
        real.push(k);
        res.push(real[0]);
        real.shift();
    }
    let res1 = [];
    let map = new Object();/*  */
    for (let i = 0; i < n; i++) {
        map[res[i]] = arr[i];
    }
    // Object.keys(map).sort((a,b) => a - b);

    for (let i = 1; i <= n; i++) {
        res1.push(map[i]);
    }

    return res1.join(' ');
}
console.log(puke(4,[1,2,3,4]))

// Array.from({length: arr.length},(v, i) => ++i)