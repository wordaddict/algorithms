var nextGreaterElements = function(nums) {
    const len = nums.length;
    const res = new Array(len).fill(-1);
    
    const lesserStack = [];

    if (!nums || len < 1) return res;
	
    for (let i=0; i < len*2; i++) {
        const currIdx = i%len;
        const currNum = nums[currIdx];
        
        // Last number smaller than currNum
        let stackPeek = nums[lesserStack[lesserStack.length - 1]];
        
        // While there are still indexes in stack
        // (indexes waiting for their next greater number)
        while (lesserStack.length && stackPeek < currNum) {
            // idx of the next lesser number
            const lesserNumIdx = lesserStack.pop();
            
            // Set value for that idx to currNum
            res[lesserNumIdx] = currNum;
            
            // Peek last idx of stack
            stackPeek = nums[lesserStack[lesserStack.length - 1]];
        }
        
        // Push currIdx to wait for its next greater number
        lesserStack.push(currIdx);
    }

    return res;
};