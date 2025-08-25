//singleton

//object literals

const mysy = Symbol("key1");

const user = {
    name:"sameer",
    "full name":"sameer shekh",
    [mysy]:"key1",
    age:22,
    isgraduated: true,
    location: "ghaziabad",
    email: "sameer@gmail.com"
}

console.log(user.name);
console.log(user["name"]);
console.log(user["full name"]);
console.log(user[mysy]);
console.log(typeof user[mysy]); //string it is now using as symbol with this  mysy:"key1",

// Object.freeze(user) // you cannot make changes 
// Object.assign({},source) souce - obj1,obj2


const obj = [
    {
        id:1,
        name:"sameer"
    },
    {
        id:2,
        name:"anam"
    },
    {
        id:3,
        name:"rihan"
    },
    {
        id:4,
        name:"shaziya"
    },
    {
        id:5,
        name:"muskan"
    },
    {
        id:6,
        name:"ayan"
    }

]

console.log(obj[1].name);

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.values(obj)[0]);
console.log(Object.entries(obj));


// IF I WANT TO FREEZE ONE A PROPERTY OF AN OBJECT RATHER THAT FREEZING IT ALL I CAN USE SOME PROPERTIES OF THE OBJECT
Object.defineProperty(user, "name", {
    writable: false, // cannot change the value of name
    configurable: false, // cannot delete the property
    enumerable: true // can be enumerated
});
console.log(user.name); // sameer
user.name = "sameer shekh"; // will not change the value of name
console.log(user.name); // sameer
console.log(user.age)
user.age = 25; // can change the value of age
console.log(user.age)