function handleTime(time){
    let date = new Date(time);
    let y =date.getFullYear()+'-';
    let m = (date.getMonth()+1).toString().padStart(2,'0')+'-';
    let d = date.getDate().toString().padStart(2,'0')+' ';
    let h = date.getHours().toString().padStart(2,'0')+':';
    let mm = date.getMinutes().toString().padStart(2,'0')+':';
    let s = date.getSeconds().toString().padStart(2,'0')+' ';
    let day = date.getDay();
    let arr=['日','一','二','三','四','五','六']
    return y+m+d+h+mm+s+"星期"+arr[day];
}
console.log(handleTime(Date.now()))