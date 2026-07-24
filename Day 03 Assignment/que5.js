const users = [
  { id: 1, name: "Alice", role: "admin" },
  { id: 2, name: "Bob", role: "user" },
  { id: 3, name: "Charlie", role: "admin" },
  { id: 4, name: "David", role: "user" }
];

const groupedByRole = users.reduce((acc, user) => {
  // Destructure role and collect the remaining properties (id, name)
  const { role, ...userWithoutRole } = user;

  // Initialize the array for this role if it doesn't exist yet
  if (!acc[role]) {
    acc[role] = [];
  }

  // Push the cleaned object into its respective role array
  acc[role].push(userWithoutRole);

  return acc;
}, {});

console.log(groupedByRole);