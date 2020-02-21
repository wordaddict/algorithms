var zigzagLevelOrder = function(root) {
    if(root === null){
       return [];
       }
    let res = [];
    function recursion(node, level){
          // let arr = [];
        if(node === null){
           return;
        }
      
        if(res.length <= level){
           res.push([])
        }
        if(level % 2 === 0){
           res[level].push(node.val);
        } else {
            res[level].splice(0, 0, node.val)
        }
        recursion(node.left, level + 1);
        recursion(node.right, level + 1)
    }
    recursion(root, 0)
    return res;
};