const word = 'hello';

function findFirstRep(str) {
  const table = {};
  for (const char of str) {
    if (table[char]) {
      return char;
    }
    table[char] = 1;
  }
}

// Time Complexity: O(n)

console.log(findFirstRep(word));
