var canVisitAllRooms = function(rooms) {
    let visited = new Array(rooms.length).fill(false);
    function dfs(startIndex){
        //退出循环的条件是该节点已经访问过
        if(visited[startIndex]) {
            return;
        }
        //dfs具体操作
        visited[startIndex] = true;
        for (const i of rooms[startIndex]) {
            dfs(i)
        }
        
    }
    dfs(0);
    let res  = visited.every(item => item==true);
    return res;
};