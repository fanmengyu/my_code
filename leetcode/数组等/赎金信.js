var canConstruct = function(ransomNote, magazine) {
    let str = new Array(26).fill(0);
    for(const i of magazine) {
        str[i.charCodeAt() - 'a'.charCodeAt()]++;
    }

    for(const s of ransomNote) {
        const index = s.charCodeAt() - 'a'.charCodeAt();
        if(!str[index]) return false;
        str[index]--;
    }
    return true;

};