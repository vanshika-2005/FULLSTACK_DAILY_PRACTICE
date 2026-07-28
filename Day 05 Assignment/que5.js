const person = { name: "Alice" };
const numbers = [1, 2, 3];

// person.name = "Bob"; → Valid. const prevents reassigning the variable reference, but it does not make the underlying object immutable.

// person = { name: "Charlie" }; → Invalid (TypeError). Attempts to reassign a const reference.

// numbers.push(4); → Valid. Modifies (mutates) the existing array contents without changing the memory reference.

// numbers = [5, 6, 7]; → Invalid (TypeError). Reassignment of a const variable.

// Object.freeze(person); → Valid. Freezes the person object so its properties can no longer be added, deleted, or reassigned.

// person.name = "Dave"; → Fails silently in non-strict mode, throws a TypeError in strict mode. Object.freeze() locks the properties. person.name remains "Bob".