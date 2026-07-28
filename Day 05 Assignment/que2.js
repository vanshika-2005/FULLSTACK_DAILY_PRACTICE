const rgb = [255, 128, 64, 32, 16];

// 1 & 2. Extract red, skip green, extract blue, collect remaining into alphaChannels
let [red, , blue, ...alphaChannels] = rgb;
// red = 255, blue = 64, alphaChannels = [32, 16]

// 3. Swap red and blue values without a temp variable
[red, blue] = [blue, red];
// red = 64, blue = 255