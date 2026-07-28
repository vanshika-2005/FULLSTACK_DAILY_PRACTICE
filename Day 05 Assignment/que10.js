const myModule = (function() {
  // Private variable and method
  let secret = "SuperSecretKey123";

  function privateMethod() {
    console.log("Executing private logic...");
  }

  return {
    publicMethod() {
      privateMethod();
      console.log("Public method executed!");
    },
    getSecret() {
      return secret;
    }
  };
})();

// Usage:
myModule.publicMethod(); // Output: "Executing private logic..." followed by "Public method executed!"
console.log(myModule.getSecret()); // "SuperSecretKey123"
console.log(myModule.secret); // undefined