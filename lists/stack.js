class Stack {
  constructor() {
    this.items = []; // Initialize an empty array to hold the stack elements
  }

  // Add an item to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // Remove and return the top item from the stack
  pop() {
    if (this.items.length === 0) return "Underflow"; // Return a message if the stack is empty
    return this.items.pop();
  }

  // View the top item of the stack without removing it
  peek() {
    return this.items.at(-1);
  }

  // Check if the stack is empty
  isEmpty() {
    return !!this.items.length;
  }

  // Return the number of items in the stack
  size() {
    return this.items.length;
  }

  // Clear all items from the stack
  clear() {
    this.items = [];
  }

  // Print the elements of the stack
  printStack() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str.trim();
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
