console.log('hii node')

const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtTail(head=null, data) {
    
    let node = new LinkedListNode(data)
  let  temp=head;

  if(head==null){
      temp=node;
      console.log('kk', temp)
  }
  else{
      node.next=head;
      head=node;
      console.log('else ',head)
  }
    
}

insertNodeAtTail(null, 90)
insertNodeAtTail(09, 97)
