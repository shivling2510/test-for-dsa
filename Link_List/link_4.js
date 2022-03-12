class Node {
    constructor(data){
        this.data=data;
        this.next=null;

    }
}

class LinkedList {
    constructor(){
        this.head=null;
        this.size=0;
    }
    //add

    addHead(data){
        let newNode =new Node(data);

        if(!this.head){
            head=newNode;
            console.log('hii')
        }
        else{
            this.next=this.head;
            this.head-newNode;
        }
        size++;
    }

    //insert at any indexinser
    insert()
}