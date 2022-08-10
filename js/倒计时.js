var countDown = function(times){
    if(!times||isNaN(parseInt(times)))return;
    var args = arguments;
    var self = this;
    console.log(times);
    setTimeout(function(){
        args.callee.call(self,--times)
    },1000);
 
}
// console.log(countDown(5))

function daojishi(time){
   (function digui(){
    console.log(time--);
    if(time > 0) {
        setTimeout(digui,1000);
    }
  })(); 
}
daojishi(5);