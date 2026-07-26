// "string"
// "string"
// "number"
// "string"
// 1
// 2

//1. Plain Object Behavior: Key Coercion to String
// In a plain JavaScript object, keys are automatically coerced to strings (unless they are Symbols).

// JavaScript
// obj[5] = "number";   // Key is converted to String(5) -> obj["5"] = "number"
// obj["5"] = "string"; // Overwrites the existing "5" property with "string"
// obj[5] and obj["5"] look up the exact same property key "5". Therefore, both console.log statements output "string".

// Object.keys(obj) contains only a single key (["5"]), so Object.keys(obj).length returns 1.


//2. Map Behavior: Strict Key Identity without Coercion
// In a Map, keys are NOT coerced and preserve their exact data types. Lookups compare keys using the SameValueZero equality algorithm (similar to strict equality ===).

// JavaScript
// map.set(5, "number");   // Key is the primitive Number 5
// map.set("5", "string"); // Key is the primitive String "5"
// map.get(5) searches strictly for the Number key 5 and returns "number".

// map.get("5") searches strictly for the String key "5" and returns "string".

// Since 5 and "5" are treated as two completely distinct keys, map.size returns 2.