function showSalary(users, age) {
  return users
    .filter(user => user.age <= age)
    .map(user => `${user.name}, ${user.balance}`)
    .join('\n');
}

console.log(showSalary(users, 25));
/* Вывод:
Golden Branch, $1,825.65
Duncan Randall, $1,490.15
*/