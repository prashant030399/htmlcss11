// u ve to revise 7 topics here

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// const score = 100
//1 const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

//2 const id = Symbol('123')
//3 const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754


// Reference (Non primitive)

// Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"];
// let myObj = {
//     name: "hitesh",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


//Memory Lecture 10

//4 Stack(Primitive)  -> When u put any value on Stack u'll get copy of it
//5 Heap(Non-Primitive) -> When u put any value in heap u'll get reference of it

let myYoutubename = "hiteshchoudharydotcom"
//6
let anothername = myYoutubename
anothername = "chaiaurcode"

console.log( myYoutubename);     // hiteshchoudharydotcom
console.log(anothername);      //chaiaurcode

let userOne ={
    email :"user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"
//7
console.log(userOne.email);  //hitesh@google.com
console.log(userTwo.email);  //hitesh@google.com

