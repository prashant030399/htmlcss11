//In js, everthing is object 
// that means functn is funtn awa obj   .. plz see the image below  .. i know  it's a text 


//  function    -> object    -> null
//  array       -> object    -> null
//  string      -> object    -> null


//++++++++++++++++++++++++++

function multipleBy5(num){
return num *5
}

multipleBy5.power =2;

console.log(multipleBy5(5));
console.log(multipleBy5.power)
console.log(multipleBy5.prototype);                                              //{}


//+++++++++

function createCourse(coursename,price){
this.coursename = coursename;
this.price = price;
}

createCourse.prototype.increment = function(){     //.increment is a method here
    this.price++;
}


//This line adds a method called increment to the prototype of the createCourse function.
//Prototype: In JavaScript, every function  (createCourse in this case) has a prototype property, 
// which is used to define methods (increment in this case) that can be shared across all instances 
// created from that function using new.


createCourse.prototype.printme = function(){
    console.log(`Price is ${this.price}`);
}

const chai = new createCourse("chai",25)
const tea = new createCourse("tea",250)

tea.printme()



/*


Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor 
function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and 
this is bound to the newly created object. If no explicit return value is specified from the 
constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return 
a non-primitive value (object, array, function, etc.), the newly created object is returned.
@
*/




