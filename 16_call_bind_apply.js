// ******************************************************************************
// CALL APPLY BIND
// ******************************************************************************

// let userDetails = {
//     name:"Ajay Suneja",
//     age: 28,
//     Designation:"Software Development",
//     printDetails: function(){
//         console.log(this);
//     }
// }

// userDetails.printDetails()

// let userDetails_2 = {
//     name:"Sameer Suneja",
//     age: 32,
//     Designation:"Software Architect",
// }

// // FUNCTION BORROWING
// userDetails.printDetails.call(userDetails_2)

// ******************************************************************************

// let userDetails = {
//     name:"Ajay Suneja",
//     age: 28,
//     Designation:"Software Development",

// }
// function printDetails(){
//     console.log(this);
// }

// printDetails.call(userDetails)

// let userDetails_2 = {
//     name:"Sameer Suneja",
//     age: 32,
//     Designation:"Software Architect",
// }

// printDetails.call(userDetails)

// ******************************************************************************
// APPLY
// let userDetails = {
//     name:"Ajay Suneja",
//     age: 28,
//     Designation:"Software Development",
    
// }
// function printDetails(state,country){
//     console.log(this.name+" "+ state +" "+ country);
// }

// printDetails.call(userDetails,"Delhi","India")

// let userDetails_2 = {
//     name:"Sameer Suneja",
//     age: 32,
//     Designation:"Software Architect",
// }
 
// printDetails.apply(userDetails,["Gzb","UP"]) 

// ******************************************************************************
// BIND create copy of function and invoke later
// let newFun = printDetails.bind(userDetails,"delhi","india");
// console.log(newFun);
// newFun();


// function handleClick(){
//     console.log("clicked",this.id);
// }

// const inp1 = document.querySelector("#btn1");
// const inp2 = document.querySelector("#btn2");
// console.log(inp1);
// console.log(inp2);


// inp1.addEventListener("click",handleClick);

// const newfun = handleClick.bind(inp2);
// inp2.addEventListener("click",newfun);

// const divs = document.querySelectorAll(".divs");

// Array.prototype.forEach.call(divs,(div)=>{
//     div.style.border = "1px solid red";
//     div.style.height = "10px";
// });