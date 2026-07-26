// Standard Implementations
// 1. Union (Combines elements from both sets)
function union(setA, setB) {
  return new Set([...setA, ...setB]);
}

// 2. Intersection (Elements present in BOTH setA and setB)
function intersection(setA, setB) {
  return new Set([...setA].filter(item => setB.has(item)));
}

// 3. Difference (Elements in setA that are NOT in setB)
function difference(setA, setB) {
  return new Set([...setA].filter(item => !setB.has(item)));
}

// 4. Symmetric Difference (Elements in setA or setB, but NOT both)
function symmetricDifference(setA, setB) {
  const diffA = [...setA].filter(item => !setB.has(item));
  const diffB = [...setB].filter(item => !setA.has(item));
  return new Set([...diffA, ...diffB]);
}

//Test Code
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

console.log("Union:", union(setA, setB)); 
// Set(6) { 1, 2, 3, 4, 5, 6 }

console.log("Intersection:", intersection(setA, setB)); 
// Set(2) { 3, 4 }

console.log("Difference (A - B):", difference(setA, setB)); 
// Set(2) { 1, 2 }

console.log("Symmetric Difference:", symmetricDifference(setA, setB)); 
// Set(4) { 1, 2, 5, 6 }

//Modern Native Set Methods
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

setA.union(setB);               // Set { 1, 2, 3, 4, 5, 6 }
setA.intersection(setB);        // Set { 3, 4 }
setA.difference(setB);          // Set { 1, 2 }
setA.symmetricDifference(setB); // Set { 1, 2, 5, 6 }