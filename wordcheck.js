const words = ["hot","dot","dog","lot","log","cog"];
const beginWord = "hit"
const endWord = "cog"
let hash = {};
for (let word of words){
    for (let i = 0; i < word.length; i++){
        const str = word.substring(0, i) + "*" + word.substring(i+1)
        if(hash[str] === undefined){
            hash[str] = [];
        } 
        hash[str].push(word)
    }
}

console.log('hash', hash)

// BFS
let queue = [[beginWord, 1]]
let visited = {[beginWord]: true}
while(queue.length !== 0){
    const [word, level] = queue.shift();
    for (let i = 0; i < word.length; i++){
        const newWord = word.substring(0, i) + '*' + word.substring(i+1);
        const hashVal = hash[newWord];
        if(hashVal){
            for (let val of hashVal){
                if(val === endWord){
                    console.log(level + 1)
                    return level + 1;
                };

                if(!visited[val]){
                    visited[val] = true;
                    queue.push([val, level + 1]) 
                }
            }
        }
    }
}