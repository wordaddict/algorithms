var isValidBST = function(root) {
    return helper(root, null, null)
    function helper (node, lower, upper){
          if(node === null){
            return true;
       }
        const val = node.val;
     
       if(lower !== null && lower >= val){
          return false
       }
        if(upper !== null && upper <= val){
           return false;
        }
        
        // for left trees
        if(!helper(node.left, lower, val)){
           return false
        }
        if(!helper(node.right, val, upper)){
           return false
        }
        return true;
    }
 

};