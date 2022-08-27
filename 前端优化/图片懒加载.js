function lazyload() {
    const imgs = document.getElementsByTagName('img');
    const len = imgs.length;
    // 视口的高度
    //IE8及以下版本不支持window.innerHeight和window.innerWidth等属性。
    const viewHeight = window.innerHeight || document.documentElement.clientHeight;
    // 滚动条高度
    const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
    for (let i = 0; i < len; i++) {
      const offsetHeight = imgs[i].offsetTop;
      if (offsetHeight < viewHeight + scrollHeight) {
        imgs[i].src = imgs[i].getAttribute('data-src');
      }
    }
  }
  
  // 可以使用节流优化一下
  window.addEventListener('scroll', lazyload);


//2. 借助IntersectionObserver
let imgs = document.getElementsByTagName('img')
// 1. 一上来立即执行一次
let io = new IntersectionObserver(function (entires) {
    //图片进入视口时就执行回调
    entires.forEach(item => {
        // 获取目标元素
        let oImg = item.target
        // console.log(item);
        // 当图片进入视口的时候，就赋值图片的真实地址
        if (item.intersectionRatio > 0 && item.intersectionRatio <= 1) {
            oImg.setAttribute('src', oImg.getAttribute('data-url'))
        }
    })
})
Array.from(imgs).forEach(element => {
    io.observe(element)  //给每一个图片设置监听
});



// 节流优化
// let imgs = document.getElementsByTagName('img')
// 1. 一上来立即执行一次
fn()
// 2. 监听滚动事件
window.onscroll = lazyload(fn, true)
function fn() {
    // 获取视口高度和内容的偏移量
    let clietH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    console.log(clietH, scrollTop);
    for (let i = 0; i < imgs.length; i++) {
        let x = scrollTop + clietH - imgs[i].offsetTop //当内容的偏移量+视口高度>图片距离内容顶部的偏移量时，说明图片在视口内
        if (x > 0) {
            imgs[i].src = imgs[i].getAttribute('data-url'); //从dataurl中取出真实的图片地址赋值给url
        }
    }
}
  // 函数节流
function lazyload(fn, wait) {
  let previous =  Date.now();

  return function(){
      let context = this,
      args = arguments,
      now = Date.now() ;
      // 如果两次时间间隔超过了指定时间，则执行函数。
      if(now - previous >= wait){
          previous = Date.now();
          return fn.apply(context,args);
      }
  }

}
