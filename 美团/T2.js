let n = 5;//魔法石数量
let arr1 = [1,5,7,5,5];
let arr2 = [10,5,5,9,10];
//先求出数量过半的魔法石数字即大于向上取整的n/2
let map = new Map();
arr1.forEach((item) => {
    map.set(item,map.get(item)+1||1);
})
for(let i = 0; i < arr2.length; i++) {
    if(arr2[i] !== arr1[i]){
        map.set(arr2[i],map.get(arr2[i])+1||1);
    }
}
let aimArr=[];
Array.from(map).forEach((item) => {
    if(item[1] > Math.ceil(n / 2)){
        aimArr.push(item[0]);
    }
})/*  */
//由于map有序，最前面的一定是arr1里含的最多的
//统计arr1中aim的数量
let aim = aimArr[0];
let aimNum = 0;
for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] == aim) {
        aimNum++;
    }
}
// console.log('aimNum',aimNum)
if(aimNum > Math.ceil(n / 2)) result =  0 ;
result = Math.ceil(n/2) - aimNum;

console.log(result);