const { reverse } = require("dns");

function errorSort(n, arr1, k, arr2,newArr) {
    //arr1待排序数组 arr2划分点
        let res;
        if (arr2 && arr2.length == 0) return newArr;
        var left = [];
        var right = [];
        var pivot = arr2.shift();
        for (let i = 0; i < n; i++) {
            if (arr1[i] < pivot) {
                left.push(arr1[i]);
            } else if(arr1[i] > pivot) {
                right.push(arr1[i]);
            }
        }
        // console.log(left);
        newArr = left.concat(pivot,right);
        res = errorSort(arr1.length,arr1,arr2.length,arr2,newArr);
        return res;
}
let arr1 = [2,6,4,1,3,7,5];
let arr2 = [4,5];
console.log(errorSort(7,arr1,2,arr2,[]).join(' '))


// reverseStr = str.split('').reverse().join('')