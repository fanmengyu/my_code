//Object.assign()方法用于对象的合并，第一个参数是目标对象，后面的参数都是源对象。


Object.myAssign = function(target, ...source) {
    if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object')
    }
    let ret = Object(target) 
    source.forEach(function(obj) {
        if (obj != null) {
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    ret[key] = obj[key]
                }
            }
        }
    })
    return ret
}

console.log(Object.myAssign({a:1},{b:2}))
