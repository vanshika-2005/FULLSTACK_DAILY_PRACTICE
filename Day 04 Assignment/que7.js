// Private storage using WeakMaps
const privateData = new WeakMap();

class User {
  constructor(name, password) {
    // Associate private state directly with 'this' instance key
    privateData.set(this, {
      name: name,
      password: password
    });
  }

  getName() {
    return privateData.get(this).name;
  }

  checkPassword(pwd) {
    return privateData.get(this).password === pwd;
  }
}

// --- Test Case ---
const user = new User("Alice", "secret123");

// Access via public API
console.log(user.getName()); // "Alice"
console.log(user.checkPassword("secret123")); // true
console.log(user.checkPassword("wrongpass")); // false

// Verify properties are completely hidden on instance
console.log(user.name); // undefined
console.log(user.password); // undefined
console.log(Object.keys(user)); // []