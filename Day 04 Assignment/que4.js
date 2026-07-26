// While both store key-value pairs, a JavaScript Map is specifically optimized for dynamic data collections where an Object is built for structured property definitions. 
// The fundamental difference lies in key flexibility and safety: an Object only accepts Strings or Symbols as keys (coercing everything else) and inherits default prototype properties like "toString" that can cause key collisions, 
// whereas a Map accepts any data type as a key—including objects and functions—without any prototype inheritance risks. Furthermore, a Map maintains strict insertion order, is directly iterable, and provides built-in methods alongside a $O(1)$ 
// .size property, whereas finding an Object's size requires linear-time $O(n)$ key scanning via Object.keys().

//1. Using Plain Object
function countWordFrequencyObj(text) {
  const frequency = {};
  const words = text.toLowerCase().match(/\b\w+\b/g) || [];

  for (const word of words) {
    if (frequency[word]) {
      frequency[word]++;
    } else {
      frequency[word] = 1;
    }
  }

  return frequency;
}

//2. Using Map
function countWordFrequencyMap(text) {
  const frequency = new Map();
  const words = text.toLowerCase().match(/\b\w+\b/g) || [];

  for (const word of words) {
    const count = frequency.get(word) || 0;
    frequency.set(word, count + 1);
  }

  return frequency;
}

//Testing Both

const sampleText = "The quick brown fox jumps over the lazy dog. The fox was fast!";

console.log("Object Result:", countWordFrequencyObj(sampleText));
// { the: 3, quick: 1, brown: 1, fox: 2, jumps: 1, over: 1, lazy: 1, dog: 1, was: 1, fast: 1 }

console.log("Map Result:", countWordFrequencyMap(sampleText));
// Map(10) { 'the' => 3, 'quick' => 1, 'brown' => 1, 'fox' => 2, ... }