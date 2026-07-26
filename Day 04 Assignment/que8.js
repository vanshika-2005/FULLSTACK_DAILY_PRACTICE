//WeakMap keys must be objects (or non-registered symbols) because primitive values (like numbers or strings) are immutable and kept in memory permanently by JavaScript's runtime engines. 
// Since primitives cannot be garbage collected based on reference counts, they cannot be held "weakly."

//Why WeakMap is not enumerable (.size, .keys(), .forEach() do not exist)
// In a WeakMap, references to key objects are held weakly. This means at any arbitrary moment—without warning—the garbage collector might destroy a key object if no other part of your code references it.

// If WeakMap had a .size property or a .forEach() method:

// The returned list of keys would be non-deterministic (it would depend entirely on whether the garbage collector ran a millisecond ago or not).

// Iterating over keys would require holding strong temporary references to them during iteration, which contradicts the core purpose of a weak reference.

let map = new Map();
let weakMap = new WeakMap();

(function () {
  let keyObj1 = { id: 1 };
  let keyObj2 = { id: 2 };

  map.set(keyObj1, "Data in Map");
  weakMap.set(keyObj2, "Data in WeakMap");

  // Inside this scope, both contain their keys
  console.log("Map holds keyObj1:", map.has(keyObj1)); // true
  console.log("WeakMap holds keyObj2:", weakMap.has(keyObj2)); // true
})(); 

console.log("Map size after scope exit:", map.size); // 1

