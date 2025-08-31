// CALLBACK FUNTION
// A CALLBACK IS A FUNTION PASSED AS AN ARGUEMTN TO ANOTHER FUNTION

// sync code
// console.log("first");

// async code
// setTimeout(()=>{
//     console.log('this will run later');

// },3000)
// console.log("second");
// console.log("third");

// OUTPUT:-
// first
// second
// third
// this will run later

// ********************************* CALLBACK **********************************************
//  function getCheese(callback){
//     setTimeout(()=>{
//         const cheese = "🧀";
//         console.log('here is the cheese',cheese);
//         callback(cheese)
//     },2000)
//  }
// getCheese((cheese)=>{
//     console.log('got the cheese',cheese);

// })

// ********************************* CALLBACK HELL ******************************************

// pizza -> dough -> cheese

// function getCheese(callback) {
//   setTimeout(() => {
//     const cheese = "🧀";
//     console.log("here is the cheese", cheese);
//     callback(cheese);
// }, 2000);
// }

// function makeDough(cheese,callback){
//     setTimeout(()=>{
//         const dough = cheese + "🍩"
//         console.log("here is the dough", dough);
//         callback(dough)
//     },2000)
// }

// function makePizza(dough,callback){
//     setTimeout(()=>{
//         const pizza = dough + "🍕"
//         console.log("here is the pizza", pizza);
//         callback(pizza)
//     },2000)
// }

// getCheese((cheese) => {
//     makeDough(cheese,(dough)=>{
//         makePizza(dough,(pizza)=>{
//             console.log('got my pizza',pizza);

//         })
//     })
// });

//********************* THIS CALLBACK HELL IS SOLVE BY THE PROMISE BECAUSE HANDLING CALLBACK IS A TEDIOUS TASK*********************

function getCheese() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cheese = "🧀";
      console.log("here is the cheese", cheese);
      resolve(cheese);
    });
  });
}

function makeDough(cheese) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dough = cheese + "🍩";
      console.log("here is the dough", dough);
      resolve(dough);
    }, 2000);
  });
}

function makePizza(dough) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pizza = dough + "🍕";
      console.log("here is the pizza", pizza);
      resolve(pizza);
    }, 2000);
  });
}

getCheese()
  .then((cheese) => {
    console.log("got the cheese", cheese);
    return makeDough(cheese);
  })
  .then((dough) => {
    console.log("got the dough", dough);
    return makePizza(dough);
  })
  .then((pizza) => {
    console.log("I got the pizza", pizza);
  })
  .catch((e) => {
    console.log(e);
  });

  // WINDOW + . => EMOJI