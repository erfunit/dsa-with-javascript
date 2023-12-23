class HashTable {
  constructor(size = 42) {
    this.buckets = new Array(size);
    this.size = size;
  }

  hash(key) {
    // Simple hash function to calculate a hash from the key
    let hash = 0;
    for (let char of key) {
      hash += char.charCodeAt(0);
    }
    return hash % this.size;
  }

  set(key, value) {
    // Set a value in the hash table
    let index = this.hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }
    this.buckets[index].push([key, value]);
  }

  get(key) {
    // Retrieve a value from the hash table
    let index = this.hash(key);
    if (!this.buckets[index]) return null;
    for (let [k, v] of this.buckets[index]) {
      if (k === key) return v;
    }
    return null;
  }

  remove(key) {
    // Remove a value from the hash table
    let index = this.hash(key);
    if (!this.buckets[index]) return null;
    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i][0] === key) {
        this.buckets[index].splice(i, 1);
        return;
      }
    }
  }
}

// Example usage:
const hashTable = new HashTable();
hashTable.set("name", "John");
hashTable.set("age", 25);
console.log(hashTable.get("name")); // John
hashTable.remove("name");
console.log(hashTable.get("name")); // null
