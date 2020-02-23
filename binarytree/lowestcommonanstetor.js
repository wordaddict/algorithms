const lowestCommonAncestor = (root, p, q) =>  {
    let ans = null;
    function recurseTree(node, p, q){
        if(node === null){
            return false;
        }

        let left = recurseTree(node.left, p, q) ? 1 : 0;
        let right = recurseTree(node.right, p, q) ? 1 : 0;
        let mid = (node === p) || (node === q) ? 1 : 0;
        if (mid + left + right >= 2) {
            this.ans = node;
        }

        return (mid + left + right > 0);
    }

    recurseTree(root, p, q);
    return ans;
}