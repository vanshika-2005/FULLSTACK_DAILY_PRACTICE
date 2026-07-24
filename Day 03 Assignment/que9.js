const products = [
  { name: "Laptop", price: 800, inStock: true },
  { name: "Phone", price: 500, inStock: false },
  { name: "Tablet", price: 300, inStock: true }
];

// 1. Find the first product priced above $400
const firstExpensive = products.find(product => product.price > 400);
console.log(firstExpensive);
// Output: { name: 'Laptop', price: 800, inStock: true }

// 2. Check if ANY product is out of stock
const hasOutOfStock = products.some(product => !product.inStock);
console.log(hasOutOfStock);
// Output: true

// 3. Check if ALL products have a name longer than 3 characters
const allNamesLongerThanThree = products.every(product => product.name.length > 3);
console.log(allNamesLongerThanThree);
// Output: true (Laptop: 6, Phone: 5, Tablet: 6)