const letterCombinations = (digits) => {
    let outputs = [];
    const hash = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    };

    if(digits.length !== 0){
        backtrack("", digits);
        return outputs;
    }
    function backtrack(combination, next_digits){
        if(next_digits.length === 0){
            outputs.push(combination)
        } else {
            const digit = next_digits.substring(0, 1);
            const letters = hash[digit];
            for (let i = 0; i < letters.length; i++){
                const letter = hash[digit].substring(i, i + 1);
                backtrack(combination + letter, next_digits.substring(1))
            }
        }
    }
}