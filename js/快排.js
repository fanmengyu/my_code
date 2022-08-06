function quicksort(arr){
    if(arr && arr.length <= 1){
        return arr;
    }
    //设置基准(取最中间的作为基准)
    let pivotIndex = Math.floor(arr.length/2);
    let pivot = arr.splice(pivotIndex,1);
    let left = [];
    let right = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return quicksort(left).concat(pivot,quicksort(right));
}
let arr=[1,6,4,3,5,9];
console.log(quicksort(arr));
