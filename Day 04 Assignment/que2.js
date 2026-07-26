// Key Difference
// Iterable: An object that implements the Symbol.iterator protocol. 
// It defines how values are traversed using iteration mechanics. Examples: Array, Set, Map, String.

// Array-like: An object that has indexed properties (0, 1, 2, etc.) and a valid length property, 
// but does not implement Symbol.iterator. Examples: the arguments object in regular functions, DOM NodeList (in older browsers), 
// or plain objects structured like { 0: 'a', length: 1 }.

const iterable = new Set([1, 2, 3]);
const arrayLike = { 0: "a", 1: "b", 2: "c", length: 3 };

// 1. Convert iterable to an array using Array.from
const arrFromIterable = Array.from(iterable);
console.log(arrFromIterable); // [1, 2, 3]

// 2. Convert arrayLike to an array using Array.from
const arrFromArrayLike = Array.from(arrayLike);
console.log(arrFromArrayLike); // ["a", "b", "c"]

// 3. Attempting to use for...of on both

// Works: Set is an iterable and has [Symbol.iterator]
for (let item of iterable) {
  console.log(item); // Prints: 1, 2, 3
}

// Throws TypeError: for...of requires [Symbol.iterator]
try {
  for (let item of arrayLike) {
    console.log(item);
  }
} catch (error) {
  console.error(error.message); 
  // Output: "arrayLike is not iterable" (or "arrayLike[Symbol.iterator] is not a function")
}