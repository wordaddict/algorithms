/**
 * @param {string[]} words
 * @return {string[]}
 */
// var findAllConcatenatedWordsInADict = function(words) {
    
// };

function isComposedBy(word, set){
    let arr = new Array(word.length + 1).fill(false); 
    //console.log('fill', arr) 
    arr[0] = true;  
    set.delete(word);
    
    for(let i = 1; i <= word.length + 1; i++){    
      let checkpoints = arr.reduce((points, curr, i) => {
        if (curr) points.push(i);
        return points;
      }, []);
      let snippets = checkpoints.map(cp => word.substring(cp, i));        
      for (let snippet of snippets){
        if (set.has(snippet)){      
          arr[i] = true;
          break;
        }   
      }          
      
    }  
    set.add(word);  
    return arr[arr.length - 1];
  }
  
  var findAllConcatenatedWordsInADict = function(words) {  
    if (words.length < 2) return [];
    let wordSet = new Set(words);  
    if (wordSet.has("")) wordSet.delete("");
    let result = [];
    words.forEach(word => {
        return isComposedBy(word, wordSet)
      if (word.length > 0 && isComposedBy(word, wordSet)) 
        result.push(word);
    });
    return result;
  };

  let data = ["cat", "cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]
  const res = (findAllConcatenatedWordsInADict(data))