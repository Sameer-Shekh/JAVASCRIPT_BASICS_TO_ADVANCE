function add(a,b) {
    console.log(arguments);
    return a+b
}

console.log(add(2,3))
console.log(add(2,3,4,5))

// [Arguments] { '0': 2, '1': 3 }
// 5
// [Arguments] { '0': 2, '1': 3, '2': 4, '3': 5 }
// 5

// function add1() {
//     console.log(arguments);
//     let sum = 0
//     for(let i =0;i<arguments.length;i++){
//         sum = sum + arguments[i]
//     }
//     return sum
// }

// console.log(add1(1,2,3,4,4,5,5))


// const add2 = (...nums)=>{
//     console.log(nums);
    
//     let sum =0
//     for(let i =0;i<nums.length;i++){
//         sum = sum + nums[i]
//     }
//     return sum
    
// }
// console.log(add2(1,2,3,4,4,5,5))