////U ve  11  topic to revise 

// 2 methods we can create objects

// (1) singleton      // here this method is not explained , explained in 04_objects.js
//    Object.create

// (2) object literals

//1
const mySym = Symbol("key1");             //imp line

//2   here i ve created object
const JsUser = {
    name:"Prashant",
    "fullname":"Prashant Dewangan",       //3
    [mySym] : "mykey18",                       //4 imp line
    age:25,
    email:"prashant@google.com",
    lastLoginDays:["Monday","Saturday"]
}


//NEXT 4 LINES ARE IMP                        
// console.log(JsUser.name);    // both are same but latter is preferred
 console.log(JsUser["name"]);       //5

// console.log(JsUser["fullname"]);    
console.log(JsUser[mySym]);       //6

///////////////////////////-------------------------
// 7 USE OF FREEZE  
JsUser.name = "Prashu";
console.log(JsUser["name"]);

// Object.freeze(JsUser);
// JsUser.name ="Prr";
// console.log(JsUser["name"]);

//--------------FUNCTION--------------

//8
JsUser.greeting = function(){
    console.log("Hello Js");
}
//9
JsUser.greetingTwo  = function(){
    console.log(`Hello Js Two , ${this.name}`);    // `` is backticks   // this refers to user object
}                       // String interpolation - technique used to insert variables directly into a string

//10 //11
console.log(JsUser.greeting());    //shd be ()
console.log(JsUser.greetingTwo());








