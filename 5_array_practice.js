// ARRAYS
let arr = ["sameer", "aman", "rihan", "ayan"];

// 1. toString()

// res1 = arr.toString()
// console.log(arr)
// [ 'sameer', 'aman', 'rihan', 'ayan' ]
// console.log(res1)
// sameer,aman,rihan,ayan

// 2. join()

// res2 = arr.join()
// sameer,aman,rihan,ayan
// res2 = arr.join("")
// sameeramanrihanayan
// res2 = arr.join("-")
// sameer-aman-rihan-ayan
// console.log(res2)

// 3. push()
// arr.push("rahbar")
// console.log(arr)
// [ 'sameer', 'aman', 'rihan', 'ayan', 'rahbar' ]

// 4. pop()
// arr.pop()
// console.log(arr)
// [ 'sameer', 'aman', 'rihan', 'ayan' ]

// 5. shift()
// console.log(arr.shift())
// sameer
// console.log(arr)
// [ 'aman', 'rihan', 'ayan' ]

// 6. unshift()

// console.log(arr.unshift("rahbar","twaha"))
// length : 6
// console.log(arr);
// [ 'rahbar', 'twaha', 'sameer', 'aman', 'rihan', 'ayan' ]

// 7. delete

// delete arr[1]
// console.log(arr)
// [ 'sameer', <1 empty item>, 'rihan', 'ayan' ]

// 8. concat()

// let ary1 = [1, 2, 3];
// let ary2 = [23, 43, 53];
// let ary3 = [111, 12];

// let ary_new = ary1.concat(ary2, ary3);
// console.log(ary_new);
// [1,  2,   3, 23, 43, 53, 111, 12]

// 9. sort()

// let ary = [99, 32, 23, 43, 53];
// let str = ["zebra", "year", "van", "apple"];
// ary.sort();
// console.log(ary);
// [ 23, 32, 43, 53, 99 ]
// str.sort();
// console.log(str);
//[ 'apple', 'van', 'year', 'zebra' ]

// 10. splice(index,howmanyplaces,items1, ..... ,itemX)

// let arry = [99, 32, 23, 43, 53, 100];
// arry.splice(2, 3, "a", "b", "c");
// console.log(arry);
// [ 99, 32, 'a', 'b', 'с', 100 ]

// 11. slice(start,end)

// let numbers = [1, 2, 3, 4, 5, 6];
// let num2 = numbers.slice(1, 4);
// console.log(num2);
// [2, 3, 4]
// console.log(numbers)
// [ 1, 2, 3, 4, 5, 6 ]

// 12. reverse()

// let numbers = [1, 2, 3, 4, 5, 6];
// let strng = ["A", "B", "C", "D"];
// numbers.reverse();
// console.log(numbers);
// [ 6, 5, 4, 3, 2, 1 ]
// strng.reverse();
// console.log(strng);
// [ 'D', 'С', 'B', 'А' ]

// 13. isArray()

// let numbers = [1, 2, 3, 4, 5, 6];
// let strng = "CodeBustler";
// console.log(Array.isArray (numbers));
// true
// console.log(Array.isArray(strng));
// false

// 14. indexOf(item,start)

// let elements = ["laptop", "HeadSet", "Mobile", "Router"];
// console.log(elements.indexOf("Mobile", 0)); //2
// console.log(elements.indexOf("Mobile", 3)); // -1

// 15. lastindexOf(item,start)

// let elements = ["laptop", "Mobile", "HeadSet", "Mobile", "Router"];
// console.log(elements.indexOf("Mobile", 0)); // & 1
// index0f(): left to right
// console.log(elements.lastIndexOf("Mobile", 4)); //G 3
// lastIndex0f() : right to left

// 16. find()

// const arry = [5, 12, 8, 130, 44];
// const found = arry.find((element) => element > 10);
// console.log(found); // 12\

// 17. findindex()

// const array1 = [5, 12, 8, 130, 44];
// const isLargeNumber = (element) => element > 13
// console.log(array1.findIndex(isLargeNumber));
// Expected output: 3 (index)
// 130 is large number

// 18. includes()

// const num = [1, 2, 3];
// console.log(num.includes(2));
// Expected output: true
// const str = ["cat", "dog", "bat"];
// console.log(str.includes("cat"));
// Expected output: true

// 19. entries()

// const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
// const day = days.entries();
// console.log(day)
// Object [Array Iterator] {}
// for (let x of day) {
// console.log(x + "\n");
// }
// 0, sun
// 1, mon
// 2, tue
// 3, wed
// 4, thu
// 5, fri
// 6, sat

// 20. every()

// const array1 = [1, 30, 39, 29, 10, 13];
// const isBelow_1 = (currentValue) => currentValue < 40
// console.log(array1.every(isBelow_1));
// Expected output: true
// const isBelow_2 = (currentValue) => currentValue < 30;
// console.log(array1.every(isBelow_2));
// Expected output: false

// 21. some()

// const ages = [3, 10, 18, 20];
// console.log(ages.some(checkAdult));
// true
// function checkAdult(age){
// return age > 18;
// }

// 21. fill()

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.fill("Kiwi"))
// Output ["Kiwi", "Kiwi","Kiwi", "kiwi"]
// const fruits = ["Banana", "orange", "Apple", "Mango"];
// console.log(fruits.fill("Kiwi", 2, 4));

// Output ["Banana", "Orange","Kiwi", "Kiwi"]

// 22. forEach()

// const numbers =[65, 44, 12, 41]
// numbers.forEach (myFunction);
// function myFunction (item, index, arr){
//  arr[index] = item * 10
// }
// console.log(numbers)
// [ 650, 440, 120, 410 ]

// 23. filter()

// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);
// function checkAdult(age)
// {
// return age >= 18;
// }
// console.log(ages)
// [ 32, 33, 16, 40 ]
// console.log(result)
// [ 32, 33, 40 ]

// 24. reduce()

const numbers = [175, 50, 25];
let res = numbers.reduce(myFunc);
function myFunc(total, num) {
  return total - num;
}
console.log(numbers)
// [ 175, 50, 25 ]
console.log(res)
// 100


// 25. from()

// console.log(Array.from("hellowemeho"));

