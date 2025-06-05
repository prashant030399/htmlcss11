// u ve 14 topics to revise

function sayMyname(){
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("N");
    console.log("T");
}
  // sayMyname    //--------------- refernece
// sayMyname()  //---------------   execution

//1

function addTwoNumber(number1 , number2){     //here number1 n number2 are parameters
    console.log(number1 + number2);
}
// addTwoNumber(5,3)                          // here 5,3 are arguements



//2
function addTwoNo(n1,n2){
    let result = n1 + n2;
    return result;
    // return n1 + n2;
}
const result = addTwoNo(5,7) ;
// console.log(result);

//------------------------
//3,4,5,6,7
// function loginusermessage(username){
// return `${username} just logged in` ;
// }

// console.log(loginusermessage("prashant"));

//4
// function loginusername(username){
//     return `{username} just logged in `;
// }
// console.log(loginusermessage());

//5
// function loginusername(username){
//     if(username === undefined){
//         console.log("please enter username");
//         return ;
//     }
//     return `{username} just logged in`;
// }
// console.log(loginusername());


//6      & 5 are same     // ++++++++++++++++++++++++ this is imp  ++++++++++++++++++++++++++++
// function loginusername(username){
//     if(!username){
//         console.log("Please enter username");
//         return ;
//     }
//     return `{username} just logged in`;
// }
// console.log(loginusername());

//7
// function loginusername(username = "sam"){
//     if(!username){
//         console.log("please enter username");
//         return;
//     }
//     return `${username} just logged in`;
// }

// console.log(loginusername());



////////////
//next video
//8
// function calculateCartPrice(n1){
//     return n1
// } 
// console.log(calculateCartPrice(90));

// //9
// function calculateCartPrice1(...n1){    //  ...n1 is rest variable   n take into an array
//     return n1 ;
// }
// console.log(calculateCartPrice1(34,45,22,99));

// //10
// function calculateCartPrice2(val1,val2, ...n1){
// return n1
// }
// console.log(calculateCartPrice2(100,200,300,400));


//11,12   object n function
// const user = {
//     username : "prashant",
//     price:45
// }

// function handleObject(anyobject){     //not necessary to use anyobject
//     console.log(`username is ${anyobject.username} & the price is ${anyobject.price}`);
// }

// handleObject(user)    //1st method

// //12
// function object(anyobject){
//     console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`);
// }
// object({                //2nd method
//     username:"Pr",
//     price:4
// })



//13,14 array n function
                                   //getArray == anyObject
const newArray = [100,200,300];
function handleArray(getArray){
return getArray[2];
}
console.log(handleArray(newArray));

//14
function handleArray1(getArray){
return getArray[2];
}
console.log(handleArray1([100,200,300]));
   
