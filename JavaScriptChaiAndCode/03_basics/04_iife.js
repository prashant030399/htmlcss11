// u ve 4 no. of topics

//Immediately Invoked Function Expressions (IIFE)

//To escape global scope pollution , we use iife

//1    // named iife
(function chai(){
console.log("Hello");
})();       // u ve to write ; here to write another iife 

//2
// ()()   // syntax


//3 
(() => {
    console.log("Hello Prashant");
})();

//4 variable pass 
((name) => {
    console.log(`${name}`);  
})('Hitesh')



