'use strict'
debugger;

// BLOCK SCOPE
// {
//     const uid = "21bcs9617"
//     let username = "sameer"
//     var age = 24
// }

// console.log(uid);
// console.log(username);
// console.log(age);

const uid = "21bcs9617";
let username = "sameer";
var age = 24;

abc();

// FUNCTION SCOPE
function abc() {
  var user = "aman";
  let lastname = "walia";
  const height = "123cm";
  console.log(`PRINTING USER ${user},${lastname},${height}`);
  // addtwoString(user,lastname)
  let full = addtwoString(user, lastname);
  console.log(`PRINTING FULL NAME ${full}`);
  
  function pqr() {
      console.log("funtion inside abc i am pqr", user); // create a closure
      console.log("funtion inside abc i am pqr", lastname); // create a closure
      console.log("funtion inside abc i am pqr", height); // create a closure 
      // it does not matter wheather you
      // access let const or var these scope is known as
      // lexical scope -- CLOSURE
    }
    pqr();
}

function addtwoString(user, lastname) {
  const fullname = user + lastname;
  // console.log(fullname)
  return fullname;
}

console.log("HELLO WORLD");
// var = function scope but let and const have block scope
// console.log(user);
// console.log(lastname);
// console.log(height);

MUM = 1000 // WHEN WE DEFINE A VAR WITHOUT LET CONST AND VAR IT WILL NOT GO UNDER ANY SCOPE 
// WE CAN ACCESS THAT WITH WINDOW.MUM == SEE IMAGE
// IF WE WRITE 'USE STRICT' ON TOP OF CODE THIS WILL NOT WORK AND THROW ERROR