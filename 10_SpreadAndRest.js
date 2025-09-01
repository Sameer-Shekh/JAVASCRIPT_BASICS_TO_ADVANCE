// ✅ 1. Spread Operator (...)
// Purpose: To spread or expand elements of an iterable (like arrays or objects).


// ➤ In Arrays:
const nums = [1, 2, 3];
const moreNums = [...nums, 4, 5]; // spreading the original array
console.log(moreNums); // [1, 2, 3, 4, 5]

// ➤ In Objects:
const user = { name: "Sameer", age: 21 };
const updatedUser = { ...user, age: 22, location: "Delhi" };
console.log(updatedUser); // { name: "Sameer", age: 22, location: "Delhi" }

// ➤ In Function Calls:
function add(a, b, c) {
  return a + b + c;
}

const values = [1, 2, 3];
console.log(add(...values)); // 6


// ✅ 2. Rest Operator (...)
// Purpose: To gather or collect multiple elements into a single array or object.

// ➤ In Function Parameters:
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10

// ➤ In Object Destructuring:
const { name, ...rest } = { name: "Sameer", age: 21, city: "Delhi" };
console.log(name); // "Sameer"
console.log(rest); // { age: 21, city: "Delhi" }

// ➤ In Array Destructuring:
const [first, ...others] = [10, 20, 30, 40];
console.log(first); // 10
console.log(others); // [20, 30, 40]