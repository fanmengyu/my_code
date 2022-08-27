function doFun(m, n, arr){
    //岛屿数量+2
    let num = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let item = arr[i][j];
            if (item == '0') continue;
            deepSearch(i, j, arr, m, n);
            num++;
        }
    }
    return num + 2;

}
function deepSearch(r, c, arr){
    arr[r][c] = '0';
    if (r - 1 >= 0 && arr[r - 1][c] === '1') deepSearch(r - 1,c,arr, m, n);
    if (r + 1 < m && arr[r + 1][c] ==='1') deepSearch(r + 1, c, arr, m, n);
    if (c- 1 >= 0 && arr[r][c - 1] === '1') deepSearch(r, c - 1, arr, m, n);
    if (c + 1 < n && arr[r][c + 1] === '1') deepSearch(r, c + 1, arr, m, n);
}