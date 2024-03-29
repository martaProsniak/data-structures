class HashTable {
  constructor() {
    this.size = 16;
    this.buckets = Array(16).fill(null);
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
    this.buckets[keyHash] = value;
  }

  get(key) {
    const keyHash = this.hash(key);
    return this.buckets[keyHash];
  }

  display() {
    for (const key in this.buckets) {
      if (this.buckets[key] !== null) {
        console.log(key, this.buckets[key]);
      }
    }
  }
}

const table1 = new HashTable();
for (const char of 'tomato') {
  table1.set(char, char);
}

for (const char of 'apple') {
  table1.set(char, char);
}

for (const char of 'bananas and orange') {
  table1.set(char, char);
}

console.log(table1.display());
