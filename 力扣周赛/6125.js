var equalPairs = function(grid) {
    let res = 0;
    var transpose = function(matrix) {
        const m = matrix.length, n = matrix[0].length;
        const transposed = new Array(n).fill(0).map(() => new Array(m).fill(0));
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                transposed[j][i] = matrix[i][j];
            }
        }
        return transposed;
    };
    let colArr = transpose(grid);

    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < colArr.length; j++) {
            if(grid[i].toString() == colArr[j].toString()){
                res++;
            }
        }
    }
    return res;
};
