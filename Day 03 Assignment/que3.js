const prices = [100, 200, 300, 400];

const discountedPrices = prices.map((price, index) => {
  const discountRate = index % 2 === 0 ? 0.10 : 0.05;
  return price * (1 - discountRate);
});

console.log(discountedPrices); 
// Output: [90, 190, 270, 380]