function area(i, j, grid){
    //沉没四周的陆地
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === '0') return ; //检查坐标的合法性
    if (grid[i][j] !== 1) return ;
    grid[i][j] = 2;//具体操作

    area(i, j + 1, grid)
    area(i, j - 1, grid)
    area(i + 1, j, grid)
    area(i - 1, j, grid)
}


function sum(n, m) {
    let res = n;
    let pre = n;
    while(--m) {
      res += Math.sqrt(pre);
      pre = Math.sqrt(pre);
    }
    return res.toFixed(2);
}

  console.log(sum(81, 4))


