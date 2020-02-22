var maxPathSum = function(root) {
    let maxSum =     Number.MIN_SAFE_INTEGER
    if(root === null){
           return 0;
    };
    maxSum = Number(maxSum)
    sumPath(root)
    return maxSum;
    function sumPath(node){
         if(node === null){
           return 0;
         }
         let leftGain = Math.max(sumPath(node.left), 0);
         let rightGain = Math.max(sumPath(node.right), 0);
       // let sum = 0;
        let sum = node.val + leftGain + rightGain;
        maxSum = Math.max(maxSum, sum)
        
        return node.val + Math.max(leftGain, rightGain)
    }
  
};