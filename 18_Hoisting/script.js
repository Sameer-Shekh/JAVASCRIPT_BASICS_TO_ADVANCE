// NOTES
// Hoisting
// JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.

// Hoisting is not a term normatively defined in the ECMAScript specification. The spec does define a group of declarations as HoistableDeclaration, but this only includes function, function*, async function, and async function* declarations. Hoisting is often considered a feature of var declarations as well, although in a different way. In colloquial terms, any of the following behaviors may be regarded as hoisting:

// Being able to use a variable's value in its scope before the line it is declared. ("Value hoisting")
// Being able to reference a variable in its scope before the line it is declared, without throwing a ReferenceError, but the value is always undefined. ("Declaration hoisting")
// The declaration of the variable causes behavior changes in its scope before the line in which it is declared.
// The side effects of a declaration are produced before evaluating the rest of the code that contains it.


// ************************************************************** VAR
console.log(a);
var a = 'sameer'


// OUTPUT:-
// undefined

// ************************************************************** CONST = goes to termporal dead zone

// console.log(username);

// const username = 'sameer'

// OUTPUT:-
// ReferenceError: Cannot access 'username' before initialization

// ************************************************************** LET = goes to termporal dead zone
// console.log(username);

// let username = 'sameer'

// OUTPUT:-
// ReferenceError: Cannot access 'username' before initialization

// **************************************************************

// FUNCTION DEFINAION AND DECLARATION==

// function hi(){
//     console.log("Hii this is sameer");
// }

// hi()

// OUTPUT:-
// Hii this is sameer


hi()
function hi(){
    console.log("Hii this is sameer");
}

// OUTPUT:-
// Hii this is sameer


//*********************************************************************************** 
// FUNTION EXPRESSON AND DEFINATION == 

// hello() // THROW AN ERROR: ReferenceError: hello is not defined

// const hello = ()=>{
//     console.log("hello world");
    
// }
// hello() // BEHAVE NORMAL


// anonymous funciton
// const hello = function(){
//     console.log("hello world");
// }

// IIFE IS ALSO AN ANONYOMOUS FUNCTION