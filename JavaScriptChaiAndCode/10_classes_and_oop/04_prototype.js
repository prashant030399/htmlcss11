let  name  = "Prashant     "
let channelname = "chai    "

console.log(name.trueLength);                                                //undefined

let myHeroes = ["thor","spiderman"]

let heroPower = {
    thor:"Hammer",
    spiderman:"Sling",

    getSpidyPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

/*

Why Use Prototypes?

Memory Efficiency: Methods defined in the prototype are shared among all instances 
instead of being duplicated in each object.
Performance: Reduces memory usage as only one function exists in memory.
Inheritance: Allows objects to inherit methods without explicitly defining them inside the constructor.

*/

Object.prototype.prashant = function(){
    console.log(`prashant is present in all object`);
}

Array.prototype.heyprashant = function(){
    console.log(`Prashant say hello`);
}

heroPower.prashant()                                          //prashant is present in all object
myHeroes.prashant()                                          //prashant is present in all object


//If object gets (prototype), all the otherm datatypes gets the power (see upper) , but not vv (see lower)   
//to understand  plz  see image object in the image folder  in d   

//heroPower.heyprashant()                                      //error
//myHeroes.heyprashant()                                       //prashant say hello







//+++++++++++++++++++++++++++++++++++++

//Inheritance


const user ={
    name:"chai",
    email:"chai@google.com"
}

const Teacher ={
    makeVideo :true
}

const TeachingSupport ={
    isAvailable:false
}

const TASupport = {
    makeAssignment :'JS Assignment',
    fullSupport:true,
}

Object.setPrototypeOf(TeachingSupport,TASupport);
//now TeachingSupport can access properties from TASupport.
//syntax---------->     Object.setPrototypeOf(child, parent);

console.log(TASupport.isAvailable);                                        //undefined
console.log(TeachingSupport.makeAssignment);                              //JS Assignment





//
let anotherusername = "chaiaurcode       "
String.prototype.trueLengt = function(){
   
    console.log(`True Length is ${this.trim().length}`);  
}

anotherusername.trueLengt();
anotherusername.prashant();   
"hitesh".trueLengt();












