/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let maxObj = {};
    let max = 0;
    let maxWord;
    let regex = /[.,!?':;\s]/g;

    let result = paragraph.replace(regex, ' ');
    const arr = result.split(" ")
    for (let para of arr){
        if(para.length === 0){
           continue
        }
        para = para.toLowerCase();
        if(maxObj[para] === undefined){
           maxObj[para] = 1
        }
        const val = maxObj[para]
        maxObj[para] = val + 1
    }
    for (let word in maxObj){
        const check = banned.indexOf(word);
        if(maxObj[word] > max && check == "-1"){
           max = maxObj[word];
           maxWord = word
        }
    }
    return maxWord;
};