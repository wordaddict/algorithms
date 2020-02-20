var reorderLogFiles = function(logs) {
    let lettersArray = [];
    let digitArray = [];
    for (let log of logs){
        if (/ \d/.test(log)) {
          digitArray.push(log);
        } else {
              lettersArray.push(log);
        }
    }
    lettersArray.sort((a, b) => {
        const aBody = a.slice(a.indexOf(' ') + 1)
        const bBody = b.slice(b.indexOf(' ') + 1)
        const c = aBody.localeCompare(bBody)
        if(c){
            return c;
        }
        return a.localeCompare(b)
    })
    return [...lettersArray, ...digitArray];
};