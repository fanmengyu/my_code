
const removePalindromeSub = function (str) {
    if (str.length == 0) {
        return 0;
    }
    function isPalindromic(str) {
        var start = 0, end = str.length - 1;
        str = str.split('');
        while (start < end) {
            if (str[start] == str[end]) {
                start++;
                end--;
            } else {
                return false;
            }
        }
        return true;
    }
    if (isPalindromic(str)) {
        return 1;
    }
    return 2;
}

// console.log((Math.random()*100).toFixed(0))


console.log( [...new Set([1,2,3,1])])
