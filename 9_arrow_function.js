//funcion decalration
// function square(num){
//     return num*num;
// }

// console.log(square(3));

// //funciton expression
// const square1 = function(num) {
//     return num*num;
// }
// console.log(square1(2));


//arraw fun expression

// const square2 = (num)=>{
//     return num*num; //explicit return
// }
// const square2 = (num)=> num*num; //implicit return


// const square2 = ()=>(Math.floor(Math.random()*10 + 1))
// console.log(square2());

//*************************THIS KEYWORD********************************** 
const user = {
    username:"sammer",
    price: 888,

    welcomeMsg: function(){
        console.log(`${this.username} ,welcome to website`);
        // console.log(this);
        
        
    }
}

// this refer to current context
// user.welcomeMsg()
// user.username = "hitesh"
// user.welcomeMsg()
console.log(this); // {} because we are in nodejs env

function chat()
{
    console.log(this);
    
}

chat()

