 //由于求最短转化，因此我们优先从第一位开始修改
 var ladderLength = function(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    //如果set元素个数为0 或者不包含endWord,则直接return 0
    if (wordSet.size === 0 || !wordSet.has(endWord)) return 0;
    //记录word是否已经访问过
    const visitMap = new Map();

    const queue = [];
    queue.push(beginWord);
    visitMap.set(beginWord, 1);

    while(queue.length !== 0) {
        let word = queue.shift();
        //记录word路径长度
        let path = visitMap.get(word);

        for (let i = 0; i < word.length; i++) {
            for (let c = 97; c <= 122; c++) {
                //a的ASCII为97
                //将第i个元素进行改变
                let newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);
                //如果找到了endWord，则返回
                if (newWord == endWord) return path + 1;
                // wordSet出现了newWord，并且newWord没有被访问过
                if(wordSet.has(newWord) && !visitMap.has(newWord)) {
                    visitMap.set(newWord, path + 1);
                    queue.push(newWord);
                }
            }
        }
    }
    return 0;
};