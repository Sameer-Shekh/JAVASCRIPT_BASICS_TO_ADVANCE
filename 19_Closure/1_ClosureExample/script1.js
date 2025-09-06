function parent(){
    const x = 10;
    // const y = 5;
    function Child(){
      console.log(x);
    }
    return Child
}

 a = parent()
console.dir(a)

// CLOSURES ARE VERY USEFUL IN VARIOUS CASES LIKE MEMOIZATION IN JAVASCRIPT AND IN CURRYING FUNCTION ALSO

// What is a Closure?
// A closure is a function that has access to variables from its outer (lexical) scope, 
// even after the outer function has returned. Closures allow you to preserve state, create private variables, 
// and write expressive, modular code.

// Analogy: The Locked Box
// Think of a locked box that holds a note. You give someone this box along with a key (a function) that can read or update the note, 
// but they can’t touch the note directly.

// In programming terms:

// The outer function writes the note.
// The inner function (the key) can access or modify it.
// Even after the outer function is gone, the key still works


// function outer() {
//   let secret = 42;

//   function inner() {
//     console.log(secret);  // Accesses 'secret'
//   }

//   return inner;
// }

// const myClosure = outer();
// myClosure();  // Output: 42