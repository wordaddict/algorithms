var topKFrequent = function(words, k) {
    let hash = {};
    for (let word of words){
        if(hash[word] === undefined){
           hash[word] = 1
        } else {
            const count = hash[word];
            hash[word] = count + 1;
        }
    }
   return Object.entries(hash).sort(function(a,b){                 
        if (a[1]===b[1]){
            return a[0].localeCompare(b[0]);
        }
        return b[1]-a[1];
    }).map((value) => {
        return value[0]
    })
    .slice(0,k);
};

const res = topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2);
console.log('res', res)