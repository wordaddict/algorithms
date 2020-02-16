var recoverTree = function(root) {
    let vals = [];
    const go = (node, mode) => {
        if (!node) return;
        go(node.left, mode);
        if (mode === 'get') {
            vals.push(node.val);
        } else {
            node.val = vals.shift();
        }
        go(node.right, mode);
    };

    go(root, 'get');
    vals.sort((a,b) => a - b);
    go(root, 'set');

    return root;
};