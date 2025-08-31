console.log('Synchronous 1');

setTimeout(()=>console.log('Timeout 2'),0);

Promise.resolve().then(()=> console.log('Promise'));

console.log('Synchronous 4')

// OUTPUT:-
// Synchronous 1
// Synchronous 4
// Promise
// Timeout 2


// JAVASCRIPT
// -> SYNCHRONOUS 
// -> SINGLE THREADED / MAIN THREAD
// WHEN WE RUN NODE INDEX.JS THE EXECUTION CONTEXT IS CREATED AND IT IS SEND TO THE CALL STACK AFTER THAT EVENT LOOP CHECKS WHEATHE THE CODE IS 
// BLOCKING OR NON BLOCKING

// BLOCKING -> BLOCK THE FLOW OF PROGRAM EX: READ FILE SYNC
// NON BLOCKING -> DOES NOT BLOCK EXECUTION EX: READ FILE ASYNC

// *********************************************************************************************************************************************

// WHAT IS PROMISE ? 
// THE PROMISE OBJECT REPRESENTS THE EVENTUAL COMPLETION OR FAILURE OF AN ASYNCHRONOUS OPERATION AND ITS RESULTING VALUE.
// OBJECT THAT ENCAPSULATES THE RESULT OF AN ASYNCRONOUS OPERATION LET ASYNC METHODS RETURN VALUES LIKE SYNC MEHTODS
// "I PROMISE TO RETURN SOMETHING IN THE FUTURE"

// **********************************************************************************************************************

// const promiseOne = new Promise(function(resolve,reject){
//     // DO AN ASYNC TASK
//     // DB CALL ,CRYPTOGRAPHY, NETWORK CALL
//     // EX:
//     setTimeout(function(){
//         console.log('Async Task is Completed');
//         resolve();
        
//     },1000);
// })

// promiseOne.then(function(){
//     console.log(("Promise Consumed"));
    
// })


// **********************************************************************************************************************


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async Task is Completed 2');
//         resolve();
//     },1000
// )}).then(function(){
//     console.log('PROMISE CONSUMED 2');
    
// })


// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"Sameer",email:"sameer@gmail.com"})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
    
// })

// **********************************************************************************************************************

// const promiseFour = new Promise(function(resovle,reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error) {
//             resovle({username:"hitest",pass:"123"})
//         }
//         else {
//             reject('Error Something Went Wrong')
//         }
//     },1000)
// })

// promiseFour
// .then(function(user){
//     console.log(user);
//     return user.username;
// })
// .then((username)=>{
//     console.log(username);
    
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(()=>{
//     console.log("The Promise is either resolved or rejected");
// })

//************************************** ASYNC AWAIT ****************************

// const promiseFive = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let err = true;
//         if(!err) {
//             resolve({username:"AMAN",pass:"123sameer"})
//         }
//         else {
//             reject('Error Js went Wrong')
//         }
//     },1000)
// })

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive;
//         console.log(response); 
        
//     } catch (error) {
//         console.log(error);
        
//     }   
// }

// consumePromiseFive();




// async function getAllUser(){
//     try {
//         const response = await fetch('url');
//         const data = await response.json();
//         console.log(data);
        
//     } catch (error) {
//         console.log(error);
//     }
// }
// getAllUser();


// function getAllUser(){
//     const response = fetch('url');

//     response
//     .then((res)=>console.log(res))
//     .then((data)=>data.json())
//     .catch((e)=>{console.log(e)})
// }
// getAllUser()
