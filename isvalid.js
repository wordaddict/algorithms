var isValid = function(s) {
    const obj = {
        "}": "{",
        "]": "[",
        ")": "("
    }
    let stack = [];
    for (let i = 0; i < s.length; i++){
        if(obj[s[i]]){
            const topElement = stack.length === 0 ? '#' : stack.pop();
            if (topElement !== obj[s[i]]) {
                return false;
            }
        } else {
            stack.push(s[i]);
        }
    }
   return stack.length === 0 ? true : false;
};

const data = "{[]}"
console.log('res', isValid(data))