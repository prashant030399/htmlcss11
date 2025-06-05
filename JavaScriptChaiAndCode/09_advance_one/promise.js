//resolve the connections hai .then k sath 

// const promiseOne = new Promise(function(resolve,reject){

// setTimeout(()=> {
//     console.log("Promise one");
//     resolve();
// },1000)

// })

// promiseOne.then(function(){
//     console.log("promiseOne is resolved");
// })


// //promise 2
// new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("Promise 2 ");
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("Promise 2 solved")
// })


// const promise3 = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve({username:"Prashant", email:"p@gmail.com"})
//     })
// },1000)

// promise3.then( function(user){
//     console.log(user)
// })


// // u shd use let error = false 
// const promise4 = new Promise(function(resolve,reject){
//     setTimeout(() => {
// let error = true;

// if(!error){
//     resolve({user:"P",email:"prashant@gmail.com"})
// }else{
//     reject('ERROR;Something went wrong')
// }

//     },1000)
// })

// promise4.then(function(user){
// console.log(user);
// return user.username
// }).then((username)=>{
// console.log(username)
// }).catch((error)=>{
//     console.log(error)
// }).finally(() => {
//     console.log("The promise is either  resolved or rejected");
// })


// const promise5 = new Promise(function(resolve,reject){
//     setTimeout(() => {
// let error = true;

// if(!error){
//     resolve({user:"javascript",email:"prashant@gmail.com"})
// }else{
//     reject('ERROR JS:Something went wrong')
// }
//     },1000)
// })

// async function getAllUser(){
//     try{
// const response = await promise5     //here we don't use promise5() becoz promise is an object
// console.log(response)
//     }
//     catch(error){
// console.log(error)
//     }
// }


//++++++++++++++++++++++++++++++++++++++++++++Done++++++++++++++++++++++++++++++++++++++++++++++++++++++


//+++++++ fetch method1 ++++++++ 

// async function getAllUser(){
//     try{
// const response = await fetch('https://jsonplaceholder.typicode.com/users')
// const data = await response.json()    // u ve to also await this line
// console.log(data)
//     }catch(error){
//         console.log(error)
//     }
// }

// getAllUser()



//+++++++ fetch method2 ++++++++

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=> {
// return response.json();    
// }).then((date)=> {
//     console.log(date)
// }).catch((error)=> {
//     console.log(error)
// }).finally(()=> {
//     console.log("This is resolved or rejected")
// })




















