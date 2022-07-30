function solve(M, N) {
    // write code here
    if(M < N) return M;
}

// console.log(parseInt(111,2))//N进制转十进制
// console.log(solve(7, 2))

function ReverseList(pHead) {
    if (!pHead || !pHead.next) return pHead;
    let pre = null, cur = pHead;
    while (cur.next) {
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return cur;
}
module.exports = {
    ReverseList: ReverseList
};

// function rearrange1rray(nums) {
//     // write code here
//     if (nums.length == 1) return 1;
//     let l = 0, r = 1;
//     let len = nums.length;
//     let res = 1;
//     while (r < len) {
//         if (nums[r] !== nums[l]) {
//             res++;
//             nums[++l] = nums[r++];
//         } else {
//             r += 2;
//         }
//     }
//     console.log(nums);
//     return res;
// }

// console.log(rearrange1rray([1,3,3,4,4,5]))

function rearrangeArray(nums) {
    // write code here
    if (nums.length == 1) return 1;
    let l = 0, r = 1;
    let len = nums.length;
    let res = 1;
    let cf = [];
    while (r < len) {
        if (nums[r] !== nums[l]) {
            res++;
            nums[++l] = nums[r++];
        } else {
            cf.push(nums[r]);
            r++;
        }
    }
    nums.splice(res, len - res)
    nums = nums.concat(cf);
    return res;
}
// console.log(rearrangeArray([1, 2, 3, 4,5,5,5,7,8,9,10]))


function FindFirstCommonNode(pHead1, pHead2) {
    // write code here
    function listLen(node) {
        let len = 0, cur = node;
        while (cur) {
            len++;
            cur = cur.next;
        }
        return len;
    }

    let cur1 = pHead1, cur2 = pHead2,
        len1 = listLen(pHead1),
        len2 = listLen(pHead2);
    if (len1 < len2) {
        [cur1, cur2] = [cur2, cur1];
        [len1, len2] = [len2, len1];
    }
    let i = len1 - len2;
    while (i-- > 0) {
        cur1 = cur1.next;
    }
    while (cur1 && cur1 !== cur2) {
        cur1 = cur1.next;
        cur2 = cur2.next;
    }
    return cur1;
}

let number = 25
console.log(number.toString(15).toLocaleUpperCase()); // 1010
