//  Hash Table
// Javascript uses hash-table data structure in objects in a very optimized way

// ? Object: key & value
/*
{
    title: 'book'
}
*/

// ! Hash Table: index & value
/*
{
    1: 'book'
}
*/

// to convert key into index, we have to use a "Hashing" function: title => 1
// Ok, let's have a look at what if we solve a problem that needs hashing but without hashing function:

// TODO: we wanna find the first character that is being repeated:
const messsage = "hello world";

function findFirstChar(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return str[i];
      }
    }
  }
}

console.log("O(n^2): ", findFirstChar(messsage));

// : time complexity: O(n^2)
//! so, it's not a suitable choice because there is something better to use!

// USING HASH-TABLE (javascript object):
function findFirstCharWithObject(str) {
  const table = {};

  for (let char of str) {
    console.log(table);
    if (table[char]) {
      return char;
    }
    table[char] = 1;
  }
}

console.log("O(n): ", findFirstCharWithObject(messsage));
// : time complexity: O(n)
// ? so, it's a better choice because it has a better and faster runtime complexity of O(n) which is linear and also which is better than quadratic

// ---------------------------------------------------------- pure codes:

class HashTable {
  constructor() {
    this.size = 1000;
    this.products = Array(1000).fill(null);
  }

  hash(key) {
    let hash = 0;

    for (const char of key) {
      hash += char.charCodeAt(0);
    }

    return hash % this.size;
  }

  set(key, value) {
    const keyHash = this.hash(key);
    this.products[keyHash] = value;
  }

  get(key) {
    const keyHash = this.hash(key);
    return this.products[keyHash];
  }
}

// the function that we used before, with the HashTable class:
function firstChar(str) {
  const table = new HashTable();
  //   const table = {};

  for (let char of str) {
    // console.log(table);
    if (table.get(char)) {
      return char;
    }
    table.set(char, 1);
  }
}

console.log("the repeated function with HashTable class:", firstChar(messsage));
