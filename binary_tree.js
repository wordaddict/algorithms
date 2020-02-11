class Node {
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BT {
    constructor(){
        this.root = null
    }

    insert(value){
        if(typeof value !== "number"){
            return;
        }

        const newNode = new Node(value)
        if(this.root === null){
            this.root = newNode
        } else {
            return this.insertBT(this.root, newNode);
        }
    }

    insertBT(current, newNode){
        console.log('yes', current)
        if(current.left === null){
            current.left = newNode
        }
        //  else if(current.left !== 0){
        //     return this.insertBT(current.left, newNode);
        // }
        else if(current.right === null){
            current.right = newNode
        }
        // else if(current.right !== 0){
        //     return this.insertBT(current.right, newNode);
        // }
        else {
            // current.right = newNode
            this.insertBT(current.left, newNode)
        }

        // if(current.right === null){
           
        // } else {
          
        // }
    }

    getRootNode(){
        return this.root
    }

    maxDepth(node){
        if(node === null){
           return 0
        } else {
            //console.log(node)
            let leftHeight = this.maxDepth(node.left);
            let rightHeight = this.maxDepth(node.right);
            return Math.max(leftHeight, rightHeight) + 1
        }
    }
}

const bst = new BT();
// const node = new Node(12)
[3,9,20,null,null,15,7]
bst.insert(3);
bst.insert(9);
bst.insert(20);
bst.insert(null);
bst.insert(null);
bst.insert(15);
bst.insert(7);

// const root = bst.getRootNode();
// console.log('root', root)
//console.log('max', bst.maxDepth(root))