var edgeScore = function(edges) {
    let map = new Map();
    for(let i = 0; i < edges.length; i++) {
        if(map.has(edges[i])){
            map.set(edges[i], map.get(edges[i]) + i);
        }else{
            map.set(edges[i], i);
        }
    }
    map = Array.from(map).sort((a, b) => {
        if(b[1] === a[1]){
            return a[0] - b[0];
        }else {
           return  b[1] - a[1];
        }
    });
    return map[0][0];
};
console.log(edgeScore([1,0,0,0,0,7,7,5]))