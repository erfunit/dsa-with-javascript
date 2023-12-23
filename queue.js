/*
? Queue: 
. a simplified form of arrays which means it's a list of elements with less possible operations
. if an element is going to be added to this list,  it's added from back and called "ENQUEUE".
. if an elements is going ot be removed from this list, it's removed from front and called "DEQUEUE".
*/

import { LinkedList } from "./linked-list";

class Queue {
  constructor() {
    this.queue = new LinkedList();
  }

  // ? enqueue: means adding one item to the back using append method of linkedList
  enqueue(value) {
    this.queue.append(value);
  }

  // ? dequeue: means removing one item from the start(front) using shift method of linkedList.
  dequeue() {
    this.queue.shift();
  }

  // ? toArray: exports the list into an array for better visualization
  toArray() {
    return this.queue.toArray();
  }
}

// usage:
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

queue.dequeue();

console.log(queue.toArray());
