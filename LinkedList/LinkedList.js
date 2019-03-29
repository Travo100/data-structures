class ListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertNodeAtTail(value) {
        if(!this.head) {
            this.head = new ListNode(value);
        } else {
            let node = this.head;
            while(node.next) {
                node = node.next;
            }
            node.next = new ListNode(value);
        }
    }

    printList() {
        console.log(JSON.stringify(this.head, null, 2));
    }
}

let list = new LinkedList();
list.insertNodeAtTail(10);
list.insertNodeAtTail(20);
list.insertNodeAtTail(30);
list.insertNodeAtTail(40);
list.printList();