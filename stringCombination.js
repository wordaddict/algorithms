/**
 * @param {string} digits
 * @return {string[]}
 */

const hash = {
    2: "abc",
     3: "def",
     4: "ghi",
     5: "jkl",
     6: "mno",
     7: "pqrs",
     8: "tuv",
     9: "wxyz",
}

var letterCombinations = function(digits) {
     let output = [];
    if(digits.length === 0){
       return []
       }
   if(digits.length !== 0){
      backtrack("", digits, output)
   }
   return output
};


function backtrack(combination, next_digits, output){
      //let output = [];
    if(next_digits.length == 0){
        output.push(combination)
    } else {
        let digit = next_digits.substring(0, 1);
        let letters = hash[digit];
        for(let i = 0; i < letters.length; i++){
            let letter = hash[digit].substring(i, i + 1)
            backtrack(combination + letter, next_digits.substring(1), output)
        }
    }
    console.log('output', output)
    return output;
}