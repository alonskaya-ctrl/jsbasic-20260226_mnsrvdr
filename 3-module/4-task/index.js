let users = [
  {
    "balance": "$1,825.65",
    "picture": "https://placehold.it/32x32",
    "age": 21,
    "name": "Golden Branch",
    "gender": "male",
    "greeting": "Hello, Golden Branch! You have 7 unread messages.",
    "favouriteFruit": "banana"
  },
  {
    "balance": "$1,490.15",
    "picture": "https://placehold.it/32x32",
    "age": 25,
    "name": "Duncan Randall",
    "gender": "male",
    "greeting": "Hello, Duncan Randall! You have 3 unread messages.",
    "favouriteFruit": "apple"
  },
  {
    "balance": "$2,500.00",
    "picture": "https://placehold.it/32x32",
    "age": 30,
    "name": "Alice Cooper",
    "gender": "female",
    "greeting": "Hello, Alice Cooper! You have 5 unread messages.",
    "favouriteFruit": "strawberry"
  }
];

function showSalary(users, age) {
  return users
    .filter(user => user.age <= age)
    .map(user => `${user.name}, ${user.balance}`)
    .join('\n');
}

function showSalary(users, age) {
  let filtered = users.filter(user => user.age <= age);
  let lines = filtered.map(user => `${user.name}, ${user.balance}`);
  return lines.join('\n');
}

console.log(showSalary(users, 25));
/* Вывод:
Golden Branch, $1,825.65
Duncan Randall, $1,490.15
*/