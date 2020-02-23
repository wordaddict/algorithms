var diameterOfBinaryTree = function(root) {
    // Depth first search
    let ans = 1;
    let leftHeight = 0
    let rightHeight = 0
    
    function maxHeight(node){
        if(node === null){
           return 0;
        }
        let leftHeight = maxHeight(node.left);
        let rightHeight = maxHeight(node.right);
        ans = Math.max(ans, leftHeight + rightHeight + 1);
        return Math.max(leftHeight, rightHeight) + 1;
    }
    maxHeight(root);
    return ans - 1
    
};