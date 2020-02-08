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
        } else {
            return this.insertNode(this.root, newNode)
        }
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
        if(node !== null){
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

    preOrder(node){
        if(node !== null){
            console.log(node.data);
            this.inorder(node.left);
            this.inorder(node.right);
        }
    }

    postOrder(node){
        if(node !== null){
            this.inorder(node.left);
            this.inorder(node.right);
            console.log(node.data);
        }
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
    }
}

const bst = new BST();
bst.insert(15);
bst.insert(25);
bst.insert(12);
bst.insert(10);
// console.log('bst', bst)

const root = bst.getRootNode();
// console.log('root', root)

bst.inorder(root);
console.log('inorder', bst)

// const preorder = bst.inorder(root);
// console.log('preorder', preorder)