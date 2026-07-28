function displayUser({ name, address: { city } = {}, role = "user" } = {}) {
  console.log(`Name: ${name ?? "N/A"}, City: ${city ?? "N/A"}, Role: ${role}`);
}

// Explanations:
// No argument is passed: The parameter default = {} kicks in, giving the function an empty object to destructure against without throwing a TypeError.

// address is missing: The nested default address: { city } = {} ensures that address evaluates to {} rather than undefined, so looking up city won't crash the script.

// name is missing: name evaluates safely to undefined.

// Why = {} is crucial:
// Parameter level (= {} at the end): Prevents a fatal TypeError: Cannot destructure property 'name' of 'undefined' or 'null' when the function is invoked with no arguments (displayUser()).

// Nested level (address: { ... } = {}): Prevents TypeError: Cannot read properties of undefined (reading 'city') if an object is supplied but lacks the address key altogether.