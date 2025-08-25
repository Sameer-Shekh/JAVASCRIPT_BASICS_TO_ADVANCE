//arrays


const myarr = [0,1,2,3,4,5] // it could be mix elem,resizeable
const myhero = ["shaktiman","spiderman"]
const newarr = new Array(2,3,4,5);

// console.log(myarr[0]);
// console.log(newarr[0]);
// console.log(myarr.length);
// console.log(newarr.length);

// javascript copy operation create shallow copy not deep copy

// array methods

// myarr.push(9)
// console.log(myarr);
// myarr.pop()
// console.log(myarr);

// myarr.unshift(3)
// console.log(myarr); [ 3, 0, 1, 2, 3, 4, 5]

// myarr.shift()
// console.log(myarr);


// console.log(myarr.includes(9));
// console.log(myarr.indexOf(5));


// const newar = myarr.join();

// console.log(myarr); [ 0, 1, 2, 3, 4, 5 ]
// console.log(newar); 0,1,2,3,4,5  string



// SLICE AND SPLICE

console.log("A",myarr);

//IT DOES NOT AFFECT THE ORG ARRAY
const myn1 = myarr.slice(1,3);
console.log(myn1);
console.log("B",myarr);

//IT DOES AFFECT THE ORG ARRAY
const myn2 = myarr.splice(1,3);
console.log(myn2);
console.log("C",myarr);


// //OUTPUT
// A [ 0, 1, 2, 3, 4, 5 ]
// [ 1, 2 ]
// B [ 0, 1, 2, 3, 4, 5 ]
// [ 1, 2, 3 ]
// C [ 0, 4, 5 ]


const arr1 = ["sameer","aman","rihan"];
const arr2 = ["junaid","ayan","suhail"];


// const arr3 = arr1.concat(arr2);
// console.log(arr3);

// const arr3 = [...arr1,...arr2] //spread operator same as concat
// console.log(arr3);


// const arr3 = [1,2,3,[2,3,4],["sameer","aman"],...arr1,...arr2];

// const realarr = arr3.flat(Infinity);
// console.log(realarr);


// console.log(Array.isArray("sameer")); //false
// console.log(Array.from("sameer")); //[ 's', 'a', 'm', 'e', 'e', 'r' ]
// console.log(Array.from({name:"sameer"})); //[]


// let s1 = 100
// let s2 = 200
// let s3 = 300

// console.log(Array.of(s1,s2,s3)); //[ 100, 200, 300 ]











