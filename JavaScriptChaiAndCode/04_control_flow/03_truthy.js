// u ve 6  topics to revise

//1
const userEmail = [];

// if(userEmail){
//     console.log("user got email");
// } else{
//     console.log("dont have user email");
// }


//2 
//falsy value
//  0, -0, BigInt 0n , ""  null , undefined , NaN   

//truthy value
// [], {} , function(){}  ," ",  'false' , '0' 


//3
// if(userEmail.length ===0 )console.log("array is empty ");
 

//4   find whether object is empty or not
const emptyObj = {}      // becoz Object.keys() gives an array
// if(Object.keys(emptyObj).length === 0) console.log("Object is empty");


//5
//Nullish Coalescing Operator(??) : null undefined   
// // used to handle null or undefined value

// val1 = 5 ?? 10
// val1 = null ?? 10        //instead of 10 mostly it is written function   
// val1 = undefined ?? 13
// val1 = null ?? 10 ?? 20

// console.log(val1);



//6  Ternary Operator

// condition ? true : false

const amt = 330
amt > 500 ? console.log("greater than 500") : console.log(" not greater than 500") 



// false == 0    //true
// false == ""   //true
//  0 == ""     //true


//to copy  the current line n paste into another  (shift + alt + down)