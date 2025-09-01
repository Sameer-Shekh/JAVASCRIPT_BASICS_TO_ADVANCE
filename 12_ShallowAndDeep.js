// ✅ What is a Shallow Copy?
// A shallow copy means the top-level values are copied, but nested objects/arrays are still referenced (not cloned).

// const original = { name: "Sameer", address: { city: "Delhi" } };
// const shallowCopy = { ...original }; // or Object.assign({}, original)

// shallowCopy.name = "Rahul";        // ✅ changes only copy
// shallowCopy.address.city = "Noida"; // ❌ also changes `original`

// console.log(original.address.city); // "Noida" – changed!
// // ⚠️ Why? Because address is a nested object, and only its reference is copied.

// *********************************************************************************

// ✅ What is a Deep Copy?
// A deep copy means everything, including nested objects/arrays, is fully cloned. The new object is completely independent.

// 🔹 Using structuredClone() (recommended in modern JS):

// const original = { name: "Sameer", address: { city: "Delhi" } };
// const deepCopy = structuredClone(original);

// deepCopy.address.city = "Noida";
// console.log(original.address.city); // "Delhi" – original is safe ✅


// // 🔹 Old way (not recommended for all cases):

// const deepCopy1 = JSON.parse(JSON.stringify(original)); 
// // Fails for functions, undefined, circular references


// **************************************************************************************************************************

// const username1 = 'sameer'
// let username2 = username1
// console.log(username1);
// console.log(username2);
// // username1 and username2 will have same memory address


// const user1 = 'aman'
// let user2 = user1 + 'walia'
// in this case new memory add is created for user2


// FOR ARRAY

const fruits = ["apple","mango","grapes"]
const myFruits = fruits

myFruits.push("oranges")
myFruits.push("watermelan")

// IN THIS CASE ALSO BOTH ARRAY WILL POINT TO SAME REFERENCE SO BOTH WILL UPDATE


// FOR OBJECTS
const user1  = {
    firstname:"sameer",
    lastname:"shekh"
}
const user2 = user1

user2.lastname = 'malik'

// IN THIS CASE ALSO BOTH OBJECTS WILL POINT TO SAME REFERENCE SO BOTH WILL UPDATE


const user3 = {}
Object.assign(user3,user1)
// in this case new memory location is created before es6

// after es6
const user4 = {...user1} // using spread operator
