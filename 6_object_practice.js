// 1. charAt() method

// The charAt() method returns the character at a specified index in a string.

// var txt = "Hello-World";
// console.log(txt.charAt(5)); 
// Output: "-" (space character)
// console.log(txt.charAt(0)); 
// Output: "H"

// 2. concat() method
// The concat() method joins two or more strings together.

// var str1 = "Hello ";
// var str2 = "codingtute!";
// console.log(str1.concat(str2))

// 3. toUpperCase() method
// The toUpperCase() method converts a string to uppercase letters.

// var str = "Hello World!";
// console.log(str.toUpperCase());
// Output: "HELLO WORLD!"

// 4. toLowerCase() method
// The toLowerCase() method converts a string to lowercase letters.

// var str2 = "Hello World!";
// console.log(str2.toLowerCase());
// Output: "hello world!"

// 5. replace() method
// The replace() method replaces a specified value with another value in a string.

// var str = "Hello Dev!";
// console.log(str.replace("Dev", "World"))

// 6. search() method
// The search() method searches a string for a specified value and returns the position of the match.

// var str = "hello dev!";
// console.log(str.search("dev"))
//prints 6

// 7. substr() method
// The substr() method returns a part of the string, starting from a specified index and extending for a specified number of characters.
// deprecated in ECMAScript 2015 (ES6) and replaced by substring().

// var s = "JavaScript";
// console.log(s.substr(4, 6))
// //prints "Script"

// 8. substring() method
// The substring() method returns a part of the string between two specified indices.

// var s = "JavaScript";
// console.log(s.substring(4, 6))
// //prints "Sc"

// 9. valueOf() method
// const s = new String('test');
// typeof s; // 'object'
// s.valueOf(); // 'test'
// typeof s.valueOf(); // 'string'

// 10. trim() method
// The trim() method removes whitespace from both ends of a string.

// var str = " Trim Both Side  "
// console.log(str.trim())
//prints "Trim Both Side"

// 11. charcodeAt() method
// The charCodeAt() method returns the Unicode of the character at a specified index in a string.

var str = "TEST";
console.log(str.charCodeAt(0))  // 84

// 12. split() method
// The split() method splits a string into an array of substrings based on a specified separator.

var str = "1,2,3,4,5";
console.log(str.split(","))
//prints ["1", "2", "3", "4", "5"]