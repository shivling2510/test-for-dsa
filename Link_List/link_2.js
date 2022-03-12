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
            }
            current.next = node;
        }
      var k=  this.size++;
      console.log('kk', k)
    }

    // inser at any index link;

    insertAtIndex(data, index) {
        // if index >0 && index out of range;

        if (index > 0 && index > this.size) {
            return;
        }
        // if index value is 0 then
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        const node = new Node(data);
        let current, previous;

        current = this.head;
        let count = 0;
        while (count < index) {
            previous = current; // node before just index-1;
            console.log('previous', previous)
            count++;
            current = current.next; // node after index;

            console.log("current  ", current);
        }
        node.next = current;
        previous.next = node;
        this.size++;
    }

    // get at any index;

    getAt(index) {
        let current = this.head;
        let count = 0;
        while (current) {
            if (current == index) {
                console.log("current data", current.data);
            }
            count++;
            current = current.next;
        }
        return null;
    }
    printListData() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkList();
ll.insertFirst("firstNode " + +100);
 ll.insertFirst("f2 " + +200);
// ll.insertFirst("f3 " + +300);
// ll.insertLast("L1 " + +400);
// ll.insertLast("L2 " + +4);

ll.insertFirst(1);
// ll.insertLast(500);
// ll.insertFirst(900);
ll.insertAtIndex("at Index 4 " + +9871, 4);
ll.getAt("at index3" + +3);

console.log(ll.printListData());
console.log("hii");
