class node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }

    insert(value){
        const newNode = new node(value)
        if(this.isEmpty()){
            this.root = newNode
        } else {
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root, newNode) {
        if(newNode.value < root.value){
            if(root.left === null) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if(root.right === null) {
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }

    preOrder(root) {
        if(root){
            console.log(this.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
}

const a = new BinarySearchTree()

a.insert(10);
a.insert(20);
a.insert(5)
a.insert(2)
a.insert(6)
console.log(a.isEmpty());

a.preOrder(a.root)