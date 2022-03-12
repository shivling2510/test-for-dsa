class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

// created first node
// const n1 = new Node(100);
// console.log('fff', n1);

class LinkList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
        return this.head
    }

    /// insert Last Node
    insertLast(data) {
        let node = new Node(data);
        let current;

        // if link empty , make head.
        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;

                console.log('cc', current)
            }
            current.next = node;
        }
      var k=  this.size++;
      console.log('kk', k)
    }

    // inser at any index link;


    // get at any index;


    printListData() {
        let current = this.head;
        while (current) {
            current = current.next;
            current.next=node;
            console.log(current.data);

        }
    }
}

const ll = new LinkList();
ll.insertFirst("firstNode " + +100);
ll.insertFirst("firstNode " + +190);

//  ll.insertFirst("f2 " + +200);
 console.log( 'ppp', ll.insertFirst())
// // ll.insertFirst("f3 " + +300);
 ll.insertLast("L1 " + +400);
 console.log(ll.insertLast(90))
//  ll.insertLast("L2 " + +4);

// ll.insertFirst(1);
// // ll.insertLast(500);
// // ll.insertFirst(900);
// ll.insertAtIndex("at Index 4 " + +9871, 4);
// ll.getAt("at index3" + +3);

// console.log(ll.printListData());
 console.log("hii");
