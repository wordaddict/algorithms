var hasPathSum = function(root, sum) {
    if(root === null){
       return false
       }
    
    sum -= root.val;
    if((root.left === null) &&( root.right === null)){
       return sum === 0
    }
    const left = hasPathSum(root.left, sum);
    const right = hasPathSum(root.right, sum)
    return  left || right
};