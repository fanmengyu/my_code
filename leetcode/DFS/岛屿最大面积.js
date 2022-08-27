var maxAreaOfIsland = function(grid) {
    let res = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 1) {
                res = Math.max(res, area(i, j, grid));
            }
        }
    }
    return res;

    function area(i, j, grid){
        //沉没四周的陆地
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === '0') return 0; //检查坐标的合法性
        if (grid[i][j] !== 1) return 0;
        grid[i][j] = 2;//具体操作
        return 1 + area(i, j + 1, grid) + area(i, j - 1, grid) + area(i + 1, j, grid) + area(i - 1, j, grid);
    }
};