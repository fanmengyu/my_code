var insert = function (head, insertVal) {
    const node = new Node(insertVal);
    if (!head) {
        node.next = node;
        return node;
    }
    if (head.next === head) {
        head.next = node;
        node.next = head;
        return head;
    }
    let curr = head, next = head.next;
    while (next !== head) {
        if (insertVal >= curr.val && insertVal <= next.val) {
            break;
        }
        if (curr.val > next.val) {
            if (insertVal > curr.val || insertVal < next.val) {
                break;
            }
        }
        curr = curr.next;
        next = next.next;
    }
    curr.next = node;
    node.next = next;
    return head;


};

var combinationSum3 = function (k, n) {
    let res = [], path = [];
    function backtracking(k, startIndex, sum) {
        if (path.length === k && sum === n) {
            res.push([...path]);
        }
        for (let i = startIndex; sum + i <= n && i <= 9 - (k - path.length) + 1; i++) {
            path.push(i);
            sum += i;
            backtracking(k, i + 1, sum);
            sum -= i;
            path.pop();
        }
    }
    backtracking(k, 1, 0);
    return res;

};
var combinationSum = function (candidates, target) {
    //同层的不能重复
    let res = [], path = [];
    candidates.sort((a, b) => a - b);
    function backtracking(sum, startIndex, used) {
        if (sum > target) return;
        if (sum == target) {
            res.push([...path]);
            return;
        }
        for (let i = startIndex; i < candidates.length; i++) {
            if (candidates[i] > target - sum) break;
            if (!used[i - 1]) {
                path.push(candidates[i]);
                sum += candidates[i];
                used[i] = true;
                backtracking(sum, i + 1);
                sum -= candidates[i];
                path.pop();
                used[i] = false;
            }
        }
    }
    backtracking(0, 0, []);
    return res;
};

var partition = function(s) {
//1.切割
    let res=[], path=[];
    let len = s.length;
    function backtracking(startIndex){
        if(startIndex >= len){
            res.push([...path]);
            return;
        }
        for(let i = startIndex; i < len; i++){
            if(!isPalindrome(s.slice(startIndex,i+1))) continue;
            path.push(s.slice(startIndex,i+1))
            backtracking();
            path.pop();
        }
    }
//2.判断是否是回文
    function isPalindrome(str){
        if(str == str.split('').reverse().join('')){
            return true;
        }
        return false;
    }
    backtracking(0);
    return res;
};

var restoreIpAddresses = function(s) {
    let res=[], path=[];
    let len = s.length;
    function backtracking(startIndex){
        let leng = path.length;
        if(len > 4) return;
        if(startIndex === len &&leng === 4){
            res.push(path.join("."));
            return;
        }
        for(let i = startIndex; i < len; i++){
            if(+s.slice(startIndex, i+1)>255||+s.slice(startIndex, i+1)<0) continue;
            path.push(s.slice(startIndex, i+1))
            backtracking(i+1);
            path.pop();
        }
    }
    backtracking(0);
    return res;
};

var largestValues = function(root) {
    if (!root) {
        return [];
    }
    const res = [];
    const queue = [root];
    while (queue.length) {
        let len = queue.length;
        let maxVal = -Number.MAX_VALUE;
        while (len > 0) {
            len--;
            const t = queue.shift();
            maxVal = Math.max(maxVal, t.val);
            if (t.left) {
                queue.push(t.left);
            }
            if (t.right) {
                queue.push(t.right);
            }
        }
        res.push(maxVal);
    }
    return res;
};

var minCost = function(costs) {
    const n = costs.length;
    let dp = new Array(3).fill(0);
    for (let j = 0; j < 3; j++) {
        dp[j] = costs[0][j];
    }
    for (let i = 1; i < n; i++) {
        const dpNew = new Array(3).fill(0);
        for (let j = 0; j < 3; j++) {
            dpNew[j] = Math.min(dp[(j + 1) % 3], dp[(j + 2) % 3]) + costs[i][j];
        }
        dp = dpNew;
    }
    return parseInt(_.min(dp));
};

function testWeightBagProblem(wight, val, size){
    //wight是一个盛放每个物品重量的数组
    //val是每个物品价值的数组
    //size是背包容量
    const len = wight.length;
    let dp = new Array(size + 1).fill(0);
    //数组初始化

    //逆序 对于每一个物品i，可以选择放进背包或者不放进背包
    for(let i = 1; i <= len; i++){
        for(let j = size; j >= wight[i - 1]; j--){
            //如果j < wight[i - 1],则这个物品太大，放不进去，所以要退出循环，i要++了
            dp[j] = Math.max(dp[j],dp[j - wight[i]]+val[i]);
        }
    }
    return dp[size];
}