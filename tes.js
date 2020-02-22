const letter = "Micheal"

var maxPathSum = function(root) {
    let maxSum;
    if(root === null){
           return;
    };
  
    function sumPath(node){
         if(node === null){
           return;
         }
         const leftGain = Math.max(sumPath(node.left), 0);
         const rightGain = Math.max(sumPath(node.right), 0);
        let sum = 0;
        sum = node.val + leftGain + rightGain;
        maxSum = Math.max(maxSum, sum)
        return node.val + Math.max(leftGain, rightGain)
    }
    maxSum = Number(maxSum)
    sumPath(root)
    return maxSum;
};