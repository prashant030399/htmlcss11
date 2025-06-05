//u ve 9 no of topics

//1
const user ={
username:"Prashant",
price:999,
welcomemsg : function(){
console.log(`${this.username}, welcome to the website`);
console.log(this);
}
}
//2
user.welcomemsg();
// user.username= "Hitesh";
// user.welcomemsg();

//3
// console.log(this);                          // o/p   {}

//In Browser, the global object is the window object

//4

// function chai(){
//     let username = "Prashant";
//     console.log(this.username);
// }

// chai();        // undefined

//5
function chai ()  {
    let username = "Prashant";
    console.log(this);
}

chai();                                   //{}



//++++++++++++++++++++++++++ Arrow function ++++++++++++++++++++++++++++
//6,7,8
// const addTwo = (n1,n2) => {
//     return n1 + n2 ;
// }

// const  addTwo = (n1,n2 ) => n1 + n2 

// const  addTwo = (n1,n2 ) => (n1 + n2)    // this is preferred 

const addTwo = (n1,n2) => ({username:"Prashant"});      //this is object .. that's y said it is preferred

console.log(addTwo(1,2));



// 9     array
const myArray = [10, 20, 30];

myArray.forEach((element) => {
    console.log(element);
})








