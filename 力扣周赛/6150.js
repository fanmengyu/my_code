var smallestNumber = function(pattern) {
    let len = pattern.length;
    let res = Array(len).fill(1);
    for(let i = 1; i < len; i++){
        if(pattern[i] =='I'){
           res[i] =  res[i -1] +1;
        }else {
            res[i] = res[i - 1];
        }
    }
    for (let i = len - 2; i >= 0; i--) {
        if(pattern[i] == 'D') {
            res[i] = Math.max(res[i], res[i + 1] +1);
        }
    }
    // res[len] = l;
    return res.join('');
};


var smallestNumber = function(pattern) {
    
    function dfs(pos, prev, s, used){
        if(pos == pattern.length) return true;
        let ch = pattern[pos];
        if (ch == 'I'){
            for(let i = prev + 1; i < 10; i++) {
                if(used[i]) continue;
                used[i] = true;
                s.push(i);
                if (dfs(pos + 1, i, s, used)) return true;
                s.pop();
                used[i] = false;
            }
        }else {
            for (let i = 1; i < prev; i++) {
                if(used[i]) continue;
                used[i] = true;
                s.push(i);
                if (dfs(pos + 1, i, s, used)) return true;
                s.pop();
                used[i] = false;
            }
        }
        return false;
    }

    for (let i = 1; i < 10; i++) {
        let used = Array(10).fill(false);
        let s = [i];
        used[i] = true;
        let res = [];
        if(dfs(0, i, s, used)){
            for (const i of s) {
                res.push(i);
            }
        }
        return res.join('');
    }
}
console.log(smallestNumber("DDD"))