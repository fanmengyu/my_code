function doFun(m, n, sit){
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const self = sit[i][j];
            const left = j - 1 > 0? sit[i][j - 1] : undefined;
            const right = j + 1 > 0? sit[i][j + 1] :undefined;
            const top = i - 1 > 0? sit[i - 1][j] : undefined;
            const bottom = i + 1 < m? sit[i + 1][j] :undefined;

            switch (self) {
                case 0:
                    left === 0? (sit[i][j - 1] = -1) : "";
                    right === 0? (sit[i][j + 1] = -1) : "";
                    top === 0? (sit[i - 1][j] = -1) : "";
                    bottom === 0? (sit[i + 1][j] = -1) : "";
                    break;
                case 1:
                    j - 1 > 0 ? (sit[i][j - 1] = 0) : "";
                    j + 1 < n ? (sit[i][j + 1] = 0) : "";
                    i - 1 > 0 ? (sit[i - 1][j] = 0) : "";
                    i + 1 < m ? (sit[i + 1][j] = 0) : "";
                    break;
                case -1:
                    if ([left, right, top, bottom].includes(1)) {
                        sit[i][j] = 0;
                    }
                    break;
                default:
                    break;
            }
        }
    }
    const res = sit.flat().sort().lastIndexOf(-1);
    return res + 1;

}
console.log(doFun(4,6,[[1,0,0,0,0,1],[0,0,0,0,0,0],[0,1,0,0,0,1],[0,0,0,0,0,0]]))