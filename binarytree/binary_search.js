class Node {
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    };
}
class BST {
    constructor(){
        this.root = null
    };
    insert(value){
        // check type of value
        if(typeof value !== "number"){
            return;
        };

        const newNode = new Node(value);

        if(this.root === null){
            this.root = newNode;
            return this.root
        } else {
            return this.insertNode(this.root, newNode)
        }
    }

    binarySearch(root, newNode, level = 0){
        console.log('yeah root', root)
        console.log('newNode', newNode)
        console.log('level', level);
        // if (root === null){
            
        // } 
        if (root.left === null){
            root.left = newNode;
        } else {
            this.binarySearch(root.left, newNode, level + 1);
        }
          
        if (root.right === null){
            root.right = newNode;
            this.binarySearch(root.right, newNode, level + 1)
        }
        return root;
    }

    insertNode(current, newNode){
        if (newNode.data < current.data){
            if(current.left === null){
                current.left = newNode
            } else {
                return this.insertNode(current.left, newNode)
            }
        } else {
            if(current.right === null){
                current.right = newNode
            } else {
                return this.insertNode(current.right, newNode)
            }
        }
    }

    remove(data){
        this.root = this.removeNode(this.root, data)
    }
    removeNode(node, key){
        // check if root is null
        if(node === null){
            return null;
        }

        else if(node.data > key){
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (node.data < key){
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            // deleting node with no children
            if(node.left === null && node.right === null){
                node = null;
                return node;
            };

            // deleting node with one children
            if(node.left === null){
                node = node.right;
                return node;
            } else if(node.right === null){
                node = node.left;
                return node;
            }
            // deleting node with no children
            // minumum node of the right subtree is stored in aux
            let aux = this.findMinNode(node.right);
            node.data = aux.data;

            node.right = this.removeNode(node.right, aux.data);
            return node;
        }
    }

    // Tree transvesal
    // Inorder
    // transverse/inorder on the left sub tree
    // visit the root
    // transverse/inorder on the right sub tree
    inorder(node){
        if(node === null){
            return;
        }
        this.inorder(node.left);
        console.log(node.data);
        this.inorder(node.right);
    }

    preOrder(node){
        if(node === null){
            return;
        }
        console.log('node', node)
        // if(node !== null){
            console.log(node.data);
            this.preOrder(node.left);
            this.preOrder(node.right);
        // }
    }

    postOrder(node){
        if(node === null){
            return;
        }
        this.postOrder(node.left);
        this.postOrder(node.right);
        return console.log(node.data);
    }

    // Helper methods
    // find minimum node
    findMinNode(node){
        if(node.left === null){
            return node;
        } else {
            return this.findMinNode(node.left)
        }
    };

    findMaxNode(node){
        if(node.right === null){
            return node;
        } else {
            return this.findMaxNode(node.right);
        }
    }

    getRootNode(){
        return this.root;
    }

    // Time complexity
    //0(N)
    //space complexity
    // worst case, tree is completly unbalanced so O(N)
    // best case completely balanced O(logN)
    maxDepth(node){
        if(node === null){
           return 0
        } else {
            let leftHeight = this.maxDepth(node.left);
            let rightHeight = this.maxDepth(node.right);
            console.log('leftHeight', leftHeight)
            console.log('rightHeight', rightHeight)
            return Math.max(leftHeight, rightHeight) + 1
        }
    }

    minDepth(root){
        if(root === null){
            return 0;
        }
         if(root.left === null && root.right === null){
             return 1
          }
         
         let minValue = Number.MAX_VALUE;
         if(root.left !== null){
             minValue =  Math.min(this.minDepth(root.left), minValue);
          }
         
         if(root.right !== null){
             minValue =  Math.min(this.minDepth(root.right), minValue);
          }
         
         return minValue + 1
    }

    search(node, data){
        if(node === null){
            return null
        }

        if(node.data === data){
            return node;
        } else if(node.data > data){
            return this.search(node.left, data)
        } else {
            return this.search(node.right, data)
        }
    };

    levelOrder(root, level = 0, levels = []) {
        if (root === null){
            return levels;
        }
        if(levels.length === level){
            levels.push([]);
        }
        // push the current node
        levels[level].push(root.data);
        // process child nodes for the next level
        if (root.left !== null)
            this.levelOrder(root.left, level + 1, levels);
        if (root.right !== null)
            this.levelOrder(root.right, level + 1, levels);
        return levels;
    }



    levelHelper(node, level){
        if(this.levels.length === level){
            this.levels.push([]);
        }
        // push the current node
        this.levels[level].push(node.data);
        // process child nodes for the next level
        if (node.left !== null)
            this.levelHelper(node.left, level + 1);
        if (node.right !== null)
            this.levelHelper(node.right, level + 1);
    }

    isBalanced (root) {
        if(root === null){
           return true;
        } 
        return Math.abs(this.height(root.left) - this.height(root.right)) < 2 && this.isBalanced(root.left) && this.isBalanced(root.right);
        
    };
    
    height(root){
        if(root === null){
           return -1;
          }
        return 1 + Math.max(this.height(root.left), this.height(root.right));
    }
}

var levelOrder = function(root, level = 0, levels = []) {
    if (root === null){
            return levels;
        } 
        if(levels.length === level){
            levels.push([]);
        }

        // push the current node
    //console.log('root', root)
        levels[level].push(root.val);
        // process child nodes for the next level
        if (root.left !== null)
            levelOrder(root.left, level + 1, levels);
        if (root.right !== null)
            levelOrder(root.right, level + 1, levels);

        return levels;
};

// max depth n array
var maxDepth = function(root) {
    if(root === null){
       return 0;
   } else if(root.children.length === 0){
       return 1
    }
    else {
        let height = 0;
        for (let val of root.children){
               let yes = maxDepth(val)
            height = Math.max(height, yes)
        }
        return Math.max(height) + 1
       
   }
};

var levelOrderBottom = function(root, level = 0, levels = []) {
    if(root === null){
        console.log('got here')
       return levels
    }
    
    if(levels.length === level){
          levels.push([]);
    }
        levels[level].push(root.val);
    
    
    if(root.left !== null){
       levelOrderBottom(root.left, level + 1, levels)
    }
    if(root.right !== null){
       levelOrderBottom(root.right, level + 1, levels)
    }
    
    console.log('levels', levels.length, level)
    if(level === 0){
        return levels.reverse()
    }
   
    
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    if(s === null){
       return false
    }
    
     if(t === null){
       return true
    }
    
   if(areIdentical(s, t)){
      return true
    }
    
    return isSubtree(s.left, t) || isSubtree(s.right, t)
};

var areIdentical = function(root1, root2){
     if(root1 === null && root2 === null){
       return true
    }
    
      if(root1 === null || root2 === null){
       return false
      }
    return (root1.val === root2.val && areIdentical(root1.left, root2.left) && areIdentical(root1.right, root2.right) )
}

const bst = new BST();
// const node = new Node(12)
// [3,9,20,null,null,15,7]
bst.insert(1);
bst.insert(2);
bst.insert(3);
bst.insert(4);
// bst.insert(15);
// bst.insert(20);
// bst.insert(null);
// bst.insert(null);
// bst.insert(15);
// bst.insert(7);
// console.log('bst', bst)

const root = bst.getRootNode();
// console.log('root', root)
// console.log('root', root)

// bst.inorder(root);
console.log('level', bst.levelOrder(root))

// console.log('isBalanced', bst.isBalanced(root))
// console.log('min', bst.minDepth(root))

// const preOrder = bst.preOrder(root);
// console.log('preOrder', preOrder)