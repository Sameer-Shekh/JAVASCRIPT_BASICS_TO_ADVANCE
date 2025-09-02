// *********************************************************** METHOD - 1
// const user = {
//     firstName:"sameer",
//     lastName:"shekh",
//     age:24
// }

// console.log(user.firstName);
// console.log(user.lastName);
// console.log(user.age);

// // console.log(user.address); // undefined
// // console.log(user.address.city) // error Uncaught TypeError: Cannot read properties of undefined (reading 'city')



// *********************************************************** METHOD - 2

// const user = {
//     firstName:"sameer",
//     lastName:"shekh",
//     age:24
// }

// NO ERROR IN THIS CASE

// if (user.address) {
//     console.log(user.address.city)
// }

// BUT IF THIS HAPPEN THEN ALSO NO ERROR ******************** METHOD - 3

// const user = {
//     firstName:"sameer",
//     lastName:"shekh",
//     age:24,
//     address:{}
// }
// if (user.address) {
//     console.log(user.address.city)
// }

// console.log(user.address && user.address.city);
// IF THERE IS NO ADDRESS IN OBJECT THEN UNDEFINED WE GET FROM USER.ADDRESS BUT IF ADDRESS IS IN OBJECT EVEN IT IS EMPTY THEN UNDEFINED WE GET
// FROM USER.ADDRESS.CITY

// ******************** METHOD - 4

const user = {
    firstName:"sameer",
    lastName:"shekh",
    age:24,
    address:{
        city: 0
    },
    getfullName: function() {
        return user.firstName + user.lastName
    }
}

console.log(user.address?.city);
console.log(user.address?.['city']);
console.log(user.getfullName?.());


