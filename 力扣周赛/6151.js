var countSpecialNumbers = function(n) {
    const path = [];
    let res = 0;
    backtracking(n, []);
    return res;
    
    function backtracking(k, used) {
        if(path.length <= String(k).length && parseInt(path.join('')) <= k) {
            res += 1;
        }
        if(path.length > String(k).length) return;
        for (let i = 0; i <= 9; i++) {
            if(i == 0 && path.length == 0) continue;
            if(used[i]) continue;
            path.push(i);
            used[i] = true; 
            backtracking(k, used);
            path.pop();
            used[i] = false;
        }
    }
};

console.log(countSpecialNumbers(20))


var countSpecialNumbers = function(n){
  const nums = [];
  while (n) {
    nums.push(n % 10)
    n = Math.floor(n / 10)
  }
  nums.reverse()
  n = nums.length
  let res = 0,
    pre = new Set()
  for (let i = 0; i < n; i++) {
    for (let j = i ? 0 : 1; j < nums[i]; j++) {
      if (pre.has(j)) continue
      let ans = 1,
        cur = 10 - i - 1
      for (let k = i + 1; k < n; k++) {
        ans *= cur
        cur--
      }
      res += ans
    }
    if (pre.has(nums[i])) break
    pre.add(nums[i])
    if (i === n - 1) res++
  }
  for (let i = 1; i < n; i++) {
    let ans = 9,
      cur = 9
    for (let j = i + 1; j < n; j++) {
      ans *= cur
      cur--
    }
    res += ans
  }
  return res
}

var countSpecialNumbers = function(n) {
    let n = String(n);
    let len = n.length;
    let res = 
}