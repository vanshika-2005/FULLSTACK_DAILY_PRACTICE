const myMap = new Map([['a', 1], ['b', 2], ['c', 3]]);
const mySet = new Set([10, 20, 30]);

//Part 1: Iterating over myMap
// Iterating over Keys, Values, and Entries separately:

// Keys only
for (const key of myMap.keys()) {
  console.log(key); // 'a', 'b', 'c'
}

// Values only
for (const value of myMap.values()) {
  console.log(value); // 1, 2, 3
}

// Entries (explicit or default)
for (const [key, value] of myMap.entries()) {
  console.log(key, value); // 'a' 1, 'b' 2, 'c' 3
}

// Map's forEach callback receives (value, key)

// Keys
myMap.forEach((_, key) => console.log(key));

// Values
myMap.forEach((value) => console.log(value));

// Entries
myMap.forEach((value, key) => console.log(key, value));

// Keys
[...myMap.keys()].forEach(key => console.log(key));

// Values
[...myMap.values()].forEach(value => console.log(value));

// Entries
[...myMap].map(([key, value]) => `${key} -> ${value}`);

//Part 2: Iterating over mySet
for (const value of mySet) {
  console.log(value); // 10, 20, 30
}
mySet.forEach((value) => {
  console.log(value); // 10, 20, 30
});

[...mySet].forEach(value => console.log(value));