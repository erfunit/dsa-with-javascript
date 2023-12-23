import { LinkedList } from "./linked-list";

class Stack {
  constructor() {
    this.list = new LinkedList(); // Initialize an empty array to hold the stack elements
  }

  // Add an item to the top of the stack
  push(element) {
    this.list.append(element);
  }

  // Remove and return the top item from the stack
  pop() {
    return this.list.pop();
  }

  // View the top item of the stack without removing it
  peek() {
    return this.list.tail.value;
  }

  // Check if the stack is empty
  isEmpty() {
    return !!this.list.toArray.length;
  }

  // Return the number of items in the stack
  size() {
    return this.list.toArray.length;
  }

  // Clear all items from the stack
  clear() {
    this.list.clear();
  }
}

// Using the Stack
let myStack = new Stack();
myStack.push(10);
myStack.push(20);
console.log("Top element:", myStack.peek()); // Should display 20
console.log("Stack size:", myStack.size()); // Should display 2
console.log("Popped element:", myStack.pop()); // Should remove and display 20
console.log("Stack after pop:", myStack.printStack()); // Should display remaining elements
