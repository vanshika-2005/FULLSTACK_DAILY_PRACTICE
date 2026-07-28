const original = {
  user: "Alice",
  settings: { theme: "dark" }
};

const copy = { ...original };

// Modifying nested property affects BOTH original and copy
copy.settings.theme = "light";

console.log(original.settings.theme); // "light" — mutated original!

function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  return JSON.parse(JSON.stringify(obj));
}

// Test:
const deepCopy = deepClone(original);
deepCopy.settings.theme = "dark";
console.log(original.settings.theme); // "light" — original remains unaffected