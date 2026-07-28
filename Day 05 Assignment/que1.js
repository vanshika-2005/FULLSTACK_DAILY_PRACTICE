const user = {
  id: 42,
  name: "John Doe",
  address: {
    city: "New York",
    zip: "10001"
  },
  hobbies: ["reading", "coding", "gaming"]
};

// 1. Extract id and name
const { id, name } = user;

// 2. Extract city from nested address
const { address: { city } } = user;

// 3. First hobby as firstHobby and the rest as otherHobbies
const { hobbies: [firstHobby, ...otherHobbies] } = user;

// 4. Default value role = "guest" if not present
const { role = "guest" } = user;