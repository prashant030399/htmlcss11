//Object.getOwnPropertyDescriptor(Math,"PI")      //syntax where math is object, pi is its property


const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")

//console.log(descriptor);
//console.log(Math.PI);
Math.PI = 5;
//console.log(Math.PI);


const chai = {
    name:"ginger chai",
    price:250,
    isAvailable:true,

    orderChai: function(){
console.log("chai nhi bani h");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,'name'));

Object.defineProperty(chai,'name',{
//    writable:false,
    enumerable:false                              //then do true also
})

console.log(Object.getOwnPropertyDescriptor(chai,'name'));


//Object.entries() is a JavaScript method that returns an array of key-value pairs from an object.

for(let [key,value] of Object.entries(chai)) {
  console.log(`${key}:${value}`); 
}


//that's y written this

for(let [key,value] of Object.entries(chai)) {
if(typeof value !== 'function'){
    console.log(`${key}:${value}`);
    
}
}

// u can see name is not being printed become name is not enumeable







