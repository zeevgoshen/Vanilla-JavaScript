class Stack{
    constructor(){
        this.items = [];
    }

    push(value){
        this.items.push(value);
    }

    pop(){
        return this.items.pop();
    }

    isEmpty(){
        return this.items.length === 0;
    }

    toArray(){
        // slice() returns a copy of the array
        return this.items.slice();
    }
}

// const stack = new Stack();

// stack.push("Cook dinner!");
// stack.push("Wash the dishes!");
// stack.push("Buy ingredients!");

// console.log(stack.toArray());

// console.log(stack.pop());

// console.log(stack.toArray());

// console.log(stack.pop());
// console.log(stack.pop());

// console.log(stack.toArray());
