//两个一起走，如果为0的地方就不走
var uniquePathsWithObstacles = function(arr) {
    let row = arr.length, col = arr[0].length;
    let dp1 = new Array(row).fill(0).map(()=>new Array(col).fill(0));
    let dp2 = new Array(row).fill(0).map(()=>new Array(col).fill(0));
    for(let i = 0; i < row; i++){
        if(arr[i][0] > 0) {
            if(i == 0){
                dp1[0][0] = 1;
            }else {
                dp1[i][0] = dp1[i - 1][0] + 1;
            }
            arr[i][0] -= 1;
        }else {
            if(i == 0) {
                dp1[0][0] = 0;
            }else {
                dp1[i][0] = dp1[i - 1][0];
            }
        }
    }
    for(let j = 1; j < col; j++){
        if(arr[0][j] > 0) {
            dp1[0][j] = dp1[0][j -1] + 1;
            arr[j][0] -= 1;
        }else {
            dp1[0][j] = dp1[0][j -1];
        }
    }
    // console.log(dp1);
    for(let i = row - 1; i >= 0; i--){
        if(arr[i][col - 1] > 0) {
            if(i == row - 1){
                dp2[0][col - 1] = 1;
            }else {
                dp2[i][col - 1] = dp2[i + 1][col - 1] + 1;
            }
            arr[i][0] -= 1;
        }else {
            if(i == 0) {
                dp2[0][0] = 0;
            }else {
                dp2[i][0] = dp2[i + 1][0];
            }
        }
    }
    for(let j = 1; j < col; j++){
        if(arr[0][j] > 0) {
            dp2[0][j] = dp2[0][j -1] + 1;
            arr[j][0] -= 1;
        }else {
            dp2[0][j] = dp2[0][j -1];
        }
    }
    for(let i = 1; i < row; i++){
        for(let j = 1; j < col; j++){
            if(arr[i][j] > 0){
                dp1[i][j] = Math.max(dp1[i -1][j],dp1[i][j-1]) + 1;   
                arr[i][j] -= 1;  
            } else {
                dp1[i][j] = Math.max(dp1[i -1][j],dp1[i][j-1]);
            }
        }
    }
    for(let m = row - 2; m >=0; m--){
        for(let n = col - 2; n >= 0; n--) {
            if(arr[m][n] > 0){
                dp2[m][n] = Math.max(dp2[m+1][n],dp2[m][n+1]) + 1;   
                arr[m][n] -= 1;  
            } else {
                dp2[m][n] = Math.max(dp2[m+1][n],dp2[m][n+1]);
            }
        }
    }
    return dp1[row - 1][col - 1] + dp2[0][0];
};
let arr = [[1,2,1],[1,0,1],[1,2,1]];
// console.log(uniquePathsWithObstacles(arr));

function fun(arr, n){
    let dp = Array(n + 1).fill(0).map(() => Array(n + 1).fill(0));
    for(let i = 1; i < n + 1; i++) {
        for (let j = 1; j < n + 1; j++) {
            dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            if(arr[i - 1][j - 1] > 0) {
                dp[i][j]++;
            }
        }
    }

    let temp = dp[n][n];
    for(let i = n, j = n; i > 0 && j > 0;) {
        if(arr[i - 1][j - 1] > 0) {
            arr[i - 1][j - 1]--;
        }
        if (dp[i - 1][j] > dp[i][j - 1]) {
            //说明当初是走了下
            i--;
        }else{
            j--;
        }
    }
    let dp2 = Array(n + 1).fill(0).map(() => Array(n + 1).fill(0));
    for(let i = n - 1; i >= 0; i--) {
        for(let j = n -1; j >= 0; j--) {
            dp2[i][j] = Math.max(dp2[i + 1][j], dp2[i][j + 1]);
            if(arr[i][j] > 0) {
                dp2[i][j]++;
            }
        }
    }
    return dp2[0][0] + temp;
}
console.log(fun(arr,3));