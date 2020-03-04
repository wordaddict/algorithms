const generate = (n) => {
    let ans = [];
    backtrack(ans, "", 0, 0, n);
    return ans;
    function backtrack(ans, curr, open, close, max){
        if(curr.length === max * 2){
            ans.push(curr);
            return ans;
        };

        if(open < max){
            backtrack(ans, curr+"(", open + 1, close, max)
        };

        if(close < open){
            backtrack(ans, curr + ")", open, close + 1, max)
        };
    };
};

const letterCombination = (digits) => {
    const outputs = [];
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

    backtrack("", digits)
    function backtrack(comb, next_digits){
        if(next_digits.length === 0){
            outputs.push(comb);
        } else {
            const digit = next_digits.substring(0, 1);
            const letters = hash[digit];
            for (let i = 0; i < letters.length; i++){
                const letter = hash[digit].substring(i, i + 1);
                backtrack(comb + letter, next_digits.substring(1))
            }
        }
    }
};