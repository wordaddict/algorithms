/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let hash = {};
    if(s.length === 0){
       return -1
       }
    for (let i = 0; i < s.length ; i++){
        if(hash[s[i]] === undefined){
           hash[s[i]] = 1;
        } else {
            const val = hash[s[i]];
            hash[s[i]] = val + 1;
        }
    }
    let index = 0;
    for (let obj in hash){
        index++;
        if(hash[obj] == 1){
            return s.indexOf(obj);
        } else if(index === Object.keys(hash).length){
           return -1;
        }
    }
};