
// function doFun(m, arr, n){
//     if (n == 1) return '1 0';
//     arr.sort((a, b) => b - a);
//     let index = Math.floor(m / 2);
//     let aim = arr[index];
//     let resNum = 1;
//     arr.sort((a,b) => Math.abs(a - aim) - Math.abs(b - aim));
//     for (let i = 1; i < m; i++) {
//         let cost = aim - arr[i];
//         if (cost >=0 && cost <= n) {
//             //则说明可以达到平均
//             resNum++;
//             n -= cost;
//         }else {
//             break;
//         }
//     }
//     return resNum + ' ' + n;

// }
console.log(doFun(5,[2,9,3,1,6],4));

// function doFun(m, n, orgin){
//     let maxc = 1, money = orgin[0];
//     let i = 0, j = 1;
//     let cost = 0;
//     while(j < n) {
//         while(j < n && cost + (orgin[j] - orgin[j - 1]) * (j - i) <= m) {
//             cost += ((orgin[j] - orgin[j - 1]) * (j - i));
//             j++;
//         }
//         if (j - i > maxc) {
//             maxc = j - i;
//             money = orgin[j - 1];
//         }
//         cost -= orgin[j - 1] - orgin[i];
//         i++;
//     }
//     return maxc + ' ' + money;
// }

function doFun(m,arr,n){
    let left_value;
    let same_n = 1;
    let save_n = n;
    arr.sort((a, b) => a - b);
    for (let j = m; j > 0; j--) {
        left_value = n;
        let tempmax = 1;
        for (let i = 0; i < j; i++) {
            if(arr[i] + left_value >= arr[j]) {
                left_value = left_value - (arr[j] - arr[i]);
                tempmax = tempmax + 1;
            }
        }
        if(tempmax > same_n) {
            same_n = tempmax;
            save_n = left_value;
        }
        if (tempmax == same_n && save_n > left_value){
            save_n = left_value;
        }
    }
    return same_n+' ' + save_n;
}
