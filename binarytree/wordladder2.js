/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
// var findLadders = function(beginWord, endWord, wordList) {
    
// };

function generatePotentials (beginWord, dict) {
    const result = [];
    const chars = beginWord.split('');
    for (let i = 0 ; i < beginWord.length; i++) {
        const char = chars[i];
        for (let j = 0; j < 26; j++) {
            const tempChar = String.fromCharCode(97 + j);
            if (tempChar === char) {
                continue;    
            }
            chars[i] = tempChar;
            const newString = chars.join('');
            if (dict.has(newString)) {
                result.push(newString);
            }
        }
        chars[i] = char;
    }
    return result;
}

var findLadders = function(beginWord, endWord, wordList) {
    const dict = new Set(wordList);
    let start = new Set();
    dict.delete(beginWord);
    start.add(beginWord);
    const map = new Map();
    const res = [];
    
    while (start.size > 0) {
        if (start.has(endWord)) {
            break;
        }
        const set = new Set();
        for (const w of start) {
            const po = generatePotentials(w, dict);
            if (po.length > 0) {
                map.set(w, po);
                for (const p of po) {
                    set.add(p);
                }
            }
        }
        for (const s of set) {
            dict.delete(s);
        }
        start = set;
    }

    dfs(beginWord, endWord, map, res, [beginWord]);
    return res;
};

function dfs (beginWord, endWord, map, res, temp) {
    if (beginWord === endWord) {
        res.push(temp.slice());
        return;
    }

    if (map.has(beginWord)) {
        for (const w of map.get(beginWord)) {
            temp.push(w);
            dfs(w, endWord, map, res, temp);
            temp.pop();
        }
    }
}