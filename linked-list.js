
export class LinkedList {
    constructor(){
        this.head = null;   //First element
        this.tail = null;   //Last  element
    }

    append(value){
        const newNode = {value: value, next: null}; // since every node needs to know about the next node 
                                                    // every node needs a pointer to the next node, it can't be just the value
                                                    // the new node will be the last item in the list so we update the old tail

        // if the list is not empty, we update
        if (this.tail) {
            this.tail.next  = newNode;
        }
        this.tail       = newNode;                  // our new node is the new tail (not overriding the node, simply changing the pointer)
                                                    // 11:14 https://pro.academind.com/courses/1080300/lectures/23029530

        // if this is a new list
        if (!this.head){
            this.head = newNode;
        }
    }

    toArray() {                                     // if we want to print/output the list
        const elements = [];

        let curNode = this.head;
        while (curNode){
            elements.push(curNode);
            curNode = curNode.next;
        }

        return elements;
    }

    prepend(value){
        const newNode = {value: value, next: this.head};

        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode
        }
    }

    delete(value){
        if (!this.head) {
            return null;
        }

        // if it's the head node we want to delete
        // it's a while loop and not an if, since it can be
        // several nodes with the same value and we want to
        // delete them all
        while (this.head && this.head.value === value) {
            this.head = this.head.next;
        }


        let curNode = this.head;

        while (curNode.next) {
            if (curNode.next.value === value) {
                curNode.next = curNode.next.next;
            } else {
                curNode = curNode.next;
            }
            
        }

        // we need to update the tail property in case it was deleted
        if (this.tail.value === value) {
            this.tail = curNode;
        }
    }

    deleteHead(){
        if (!this.head){
            return null;
        }

        const deletedHead = this.head;

        if (this.head.next){
            this.head = this.head.next;
        } else{
            this.head = null;
            this.tail = null;
        }
        return deletedHead;
    }

    find(value) {
        if (!this.head) {
            return;
        }

        let curNode = this.head;

        while (curNode) {
            if (curNode.value === value){
                return curNode;
            }
            curNode = curNode.next;
        }

        return null;
    }

    insertAfter(value, afterValue) {
        const existingNode = this.find(afterValue);

        if (existingNode) {
            const newNode = {value: value, next: existingNode.next};
            existingNode.next = newNode; 
        }
    }
}

// const linkedList1 = new LinkedList();
// linkedList1.append(1);
// linkedList1.append("hello there");
// linkedList1.append("Max");
// linkedList1.append("Max");
// linkedList1.append(true);
// linkedList1.append(18.51);

// linkedList1.prepend("The First element !");
// linkedList1.prepend("The First element !");
// console.log(linkedList1.toArray());

// linkedList1.delete("Max");
// console.log(linkedList1.toArray());
// linkedList1.delete("The First element !");
// console.log(linkedList1.toArray());
// linkedList1.delete(18.51);
// console.log(linkedList1.toArray());
// console.log(linkedList1.find("Max"));
// console.log(linkedList1.find("hello there"));

// linkedList1.insertAfter("new value - 1", 1);
// linkedList1.insertAfter("new value - 2", "hello there");
// console.log(linkedList1.toArray());