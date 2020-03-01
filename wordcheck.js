const words = ["hot","dot","dog","lot","log","cog"];
let hash = {};
for (let word of words){
    for (let i = 0; i < word.length; i++){
        const str = word.substring(0, i) + "*" + word.substring(i, 1)
        if(hash[str] === undefined){
            hash[str] = [];
        } 
        hash[str].push(word)
    }
}

console.log('hash', hash)