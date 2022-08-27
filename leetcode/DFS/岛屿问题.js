/**
 * @param {character[][]} grid
 * @return {number}
 */

//递归结束条件是越界；遍历方向为上下左右四个方向
//0--海洋   1--陆地 2--已经遍历过
 const numIslands = (grid) => {
    let count = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {//循环网格
            if (grid[i][j] === '1') {//如果为陆地，count++，
                count++
                area(i, j, grid)
            }
        }
    }
    return count
}
function area(i, j, grid) {//沉没四周的陆地
    if (i < 0 || i >= grid.length || j < 0
        || j >= grid[0].length || grid[i][j] === '0') return //检查坐标的合法性
    //具体操作
        grid[i][j] = '0'//让四周的陆地变为海水

    area(i, j + 1, grid)
    area(i, j - 1, grid)
    area(i + 1, j, grid)
    area(i - 1, j, grid)
}
