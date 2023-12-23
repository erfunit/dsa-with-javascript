// Data structure codes must be a class
class LinkedList {
  constructor() {
    // inside documentaions, head is always the first element and tail is always the last element in our data structure.
    this.head = null;
    this.tail = null;
  }

  /*
  ? append: adds one new element at the end of this function
  1. gets the value from input
  2. creates a new linkedList-style element
  3. checks if there is tail inside our list(meaning the length is more than 1) and if it's true, then tail's pointer points at our new element
  4. now the tail is the same as new element
  5. checks if list is empty, if it's true, then the head is equal to our newElement
*/
  append(value) {
    const newElement = {
      value,
      next: null,
    };

    if (this.tail) {
      this.tail.next = newElement;
    }
    this.tail = newElement;

    if (!this.head) {
      this.head = newElement;
    }
  }

  /*
 ? prepend: prepend means adding an element at the begining of the list
  1. creates a newElement that the 'next' pointer points to the head of the list (which is defined before)
  2. now head is our newElement which means to be our first element
  3. now if there is no tail in our list, the tail is also our newElement
  */
  prepend(value) {
    // 1:
    const newElement = {
      value,
      next: this.head,
    };

    // 2:
    this.head = newElement;

    // 3:
    if (!this.tail) {
      this.tail = newElement;
    }
  }

  /*
  ? find: finds the element by value
  1. checks if the list is empty and if it is, it returns out.
  2. now our curren Element is the head, which is our first element.
  3. while there is current element, check if the value is equal to our value, if it is, return our the current element, if not, the current element is the next one.
  4. and if it gets to the last line of our method, which means that nothing found, it returns null meaning the value is not in the list.
  */
  find(value) {
    if (!this.head) {
      return console.log("list is empty!");
    }

    let currentElement = this.head;

    while (currentElement) {
      if (currentElement.value === value) {
        return currentElement;
      }

      currentElement = currentElement.next;
    }

    return null;
  }

  /* 
  ? insertAfter: an element comes after an existing element which maybe already exists
  1. we use the pre-created method to find the element that we looking for to insert after that.
  2. if the element to insert after that is in our list,
   2.1. we create a new element to insert after, it's value is the input value and it's next is the existingElement's next
   2.2. and then the existingElement's next becomes new element that's being created and inserted after it.
  3. if it doesn't exist, we log an error
  */
  insertAfter(value, afterValue) {
    const existingElement = this.find(afterValue);
    if (existingElement) {
      const newElement = {
        value,
        next: existingElement.next,
      };
      existingElement.next = newElement;
    } else {
      console.error("the element has not found in list.");
    }
  }

  /*
  ? delete: removes an element by its value from the list:
  1. checks if our list is empty or not.
  2. what if the value is our first element? it replaces with its next's until it's not
  3. creates a current element which is our head, 
  4. until the last one, if the value of next of current element is equal to our input value, the current element next becoms next's next
  5. and what if the value is placed in the last element which is our tail element pointer?  it gets out
*/
  delete(value) {
    if (!this.head) {
      return console.log("list is empty");
    }

    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    let currentElement = this.head;
    while (currentElement.next) {
      if (currentElement.next.value === value) {
        currentElement.next = currentElement.next.next;
      } else {
        currentElement = currentElement.next;
      }
    }

    if (this.tail.value === value) {
      this.tail = currentElement;
    }
  }

  /*
  ? shift: removes the first element from the list
  1. checks if the list is empty, returns null
  2. creates a constant of being deleted item to return it after operation  (which is constantly the head)
  3. if there is a next for the head, it becomes the head
  4. if head doesn't have any next element, so we clear the list
*/
  shift() {
    if (!this.head) {
      // List is empty
      return null;
    }

    const deletedItem = this.head;
    this.head = this.head.next;

    if (!this.head) {
      // List had only one element, so update tail as well
      this.tail = null;
    }

    return deletedItem;
  }
  /*
  ? pop: removes one element from the back of list:
  1. checks if the list is empty or not.
  2. starts looping through the list by creating current element filling with head
  3. while the currentElement has next value, it keeps looping
  4. if the currentElement's next is equal to the tail, 
    the currentElement becomes our head and the next gets empty with null keyword
  5. if not, keeps going with assiging currentElement with its next
  */
  pop() {
    if (!this.head) {
      return console.log("list is empty!");
    }
    let currentElement = this.head;
    while (currentElement.next) {
      if (currentElement.next === this.tail) {
        this.tail = currentElement;
        return (this.tail.next = null);
      } else {
        currentElement = currentElement.next;
      }
    }
  }

  /*
  ? clear: clears the list with making head and title empty by null keyword
  */
  clear() {
    this.head = null;
    this.tail = null;
  }

  /* 
  ?toArray : converts our linked list to an array:
  1. creating an empty array that will be filled by our elements
  2. declaring a currentElement to loop through the list that the initial value is our head(first element) 
  3. while currentElement is true, means that is not null or any falsy value
  4. the current element is added to our elemenst list and then the currentElement's next replaces with currentElement
  5. finally return the elements array
  */
  toArray() {
    const elements = [];
    let currElement = this.head;
    while (currElement) {
      elements.push(currElement.value);
      currElement = currElement.next;
    }
    return elements;
  }
}

// // usage:
// const ll = new LinkedList();

// ll.append(2);
// ll.append("hello");
// ll.append(false);
// ll.prepend("mamad");
// ll.prepend("mamad");
// ll.append("akhar");
// ll.prepend("Aval");

// ll.delete(false);

// console.log(ll.toArray());

// console.log("find method result: ", ll.find("Akhar"));
// console.log("find method result: ", ll.find("mamad"));
// console.log(ll.head);

module.exports = LinkedList;
