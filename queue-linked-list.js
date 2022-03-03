import { LinkedList } from './linked-list.js';

class Queue{
    constructor() {
        this.list = new LinkedList();
    }

    enqueue(value){
        this.list.append(value);
    }

    dequeue(){
        return this.list.deleteHead();
    }

    isEmpty(){
        return !this.list.head;
    }

    toArray(){
        return this.list.toArray();
    }
}


let queue = new Queue();

queue.enqueue('Zeev');
queue.enqueue('Ela');
queue.enqueue('Itai');

console.log(queue.toArray());

console.log(queue.dequeue());

console.log(queue.toArray());

console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue.toArray());