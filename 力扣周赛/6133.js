var maximumGroups = function(grades) {
    grades.sort((a,b) => a - b);
    if(grades.length == 2) return 1;
    // let group = Math.floor(Math.sqrt(2*grades.length));
    let pre = grades[0], cur = 0;
    let l = 1; r = 1, preLen = 1;
    let res = 1;
    while(r < grades.length) {
        cur += grades[r++];
        while(cur >= pre && r - l> preLen) {
            res++;
            preLen = r - l;
            pre = cur;
            cur = 0;
            l = r;
        }
    }
    return res;
};

console.log(maximumGroups([2,31,41,31,36,46,33,45,47,8,31,6,12,12,15,35]))