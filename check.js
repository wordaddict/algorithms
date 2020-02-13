var lengthOfLongestSubstring = function(s) {
    if(s.length === 1){
       return 1;
    }
    let count = 0
    let letterObj = {};
    let maxNum  = 0;
    for(let i = 0; i < s.length; i++){
        if(letterObj[s[i]] === undefined){
            count += 1;
        } else{
            count = Math.min(i - letterObj[s[i]], count + 1);
        }
        maxNum = Math.max(maxNum, count);
        letterObj[s[i]] = i; //save the index
    }
    return maxNum;
};

console.log('sol', lengthOfLongestSubstring("abcabcbb"))

// console.log('sol', lengthOfLongestSubstring("bbbbb"))

// var lengthOfLongestSubstring = function(s) {
//     let max_len = 0;
//     let curr = 0;
//     let hash = {}; 
//     if(s.length < 2) {
//         return s.length;
//     }
//     for(let i = 0; i < s.length;  i++) {
//         if(hash[s[i]] == null) {
//             curr += 1;
//         } else {
//             curr = Math.min(i - hash[s[i]], curr + 1);
//         }
//         max_len = Math.max(max_len, curr);
//         hash[s[i]] = i; //save the index
//     }
//     return max_len;
// };
