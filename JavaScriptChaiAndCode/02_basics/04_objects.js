////U ve  10 topic to revise 

// singleton method used to create object
//1
const tinderUser = new Object();

tinderUser.id = "1233";
tinderUser.name="Prashant";
tinderUser.isLoggedIn = false ;

// console.log(tinderUser);
//2
const regularUser = {
    email : "prashant@gmail.com",
    fullname : {
        userfullname : {
firstname : "Prashant",
lastname : "Dewangan"
        }
    }
}
//3
// console.log(regularUser.fullname.userfullname.firstname);

console.log(regularUser.fullname?.userfullname.firstname);    // to check whether fullname is available 


//4
const obj1  = {1:"a",2:"b"};
const obj2  = {3:"a",4:"b"};
const obj4  = {5:"a",6:"b"};

const obj3 = Object.assign({},obj1, obj2);   // this  is preferred
// console.log(obj3);

// 5     Array of objects
const users = [
    {
        id : 1,
        email:"prash@gmail.com"
    },
    {
        id:2,
        email:"p@gmail.com"
    },
    {
        id : 3,
        email:"rash@gmail.com"
    }
 ] 


 //6
// console.log(users[1].email);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));    // both keys n value

// console.log(tinderUser.hasOwnProperty('name'));      //u ve to write the name of a key


//--------------------------------lecture 3 of object -----------

const course = {
    coursename  : "js_In_Hindi",
    price:999,
    courseInstructor:"hitesh"
}
//7
const{courseInstructor}= course;
console.log(courseInstructor);
//8
const{courseInstructor : g}= course;
console.log(g);

//JSON
//9
// {
// "name" : "prashant",
// "course":"btech",
// "price":9
// }

//10
[
    {},
    
    {}, 
    {}
]
