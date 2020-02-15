var groupAnagrams = function(strs) {
    let anagMap = {};
    for(let str of strs){
        let sortedStr = str.split("").sort().join("");
        console.log('sortedStr', sortedStr)
        if(!anagMap[sortedStr]){
            anagMap[sortedStr] = [];
        }
        anagMap[sortedStr].push(str);
    }
    console.log('anagMap', anagMap)
    return Object.values(anagMap);
};