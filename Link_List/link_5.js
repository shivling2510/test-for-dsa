console.log('hii')
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below
let node = new LinkedListNode(20);
node = new LinkedListNode(25)
node.next= new LinkedListNode(40)
console.log(node.next.data)
console.log('\n node is ::', node, )


// console.log(node.next, node.data)

function insertNodeAtTail(head, data) {
    
    let node = new LinkedListNode(20)
    console.log(node)
    
}

let l=new LinkedListNode();


