// 方法1
const shuffle1 = (arr) => {
    return arr.sort(() => {
      return Math.random() > 0.5 ? 1 : -1
    })
  }
  
  // 方法2
const shuffle2 = (arr) => { 
      let i = arr.length
      while (i) { 
          let j = Math.floor(Math.random() * i--)
          [arr[j], arr[i]] = [arr[i], arr[j]]
      } 
  }


function fun(arr){
  return arr.sort(() => {
    return Math.random() > 0.5 ? 1 : -1;
  })
}

console.log(fun([1,2,3,4,5,6]))