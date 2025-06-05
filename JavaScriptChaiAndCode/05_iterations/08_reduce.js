// u ve 3 topics to revise

//1   reduce (for keep on adding) (used for shopping cart)
//acc = accumulator     //curval = current value
const myArray = [ 1,2,3]

// const values = myArray.reduce(function(acc, curval)  {
//     console.log(`acc: ${acc} and curval: ${curval}`);
//     return acc + curval
// },0)

// coz acc starts with 0


//2 optimised (arrow function)
//const values = myArray.reduce( (acc,currval) => acc + currval, 0)


//console.log(values);


//3
const course = [
    {
        coursename : "js",
price:2999
    },
    {
        coursename : "python",
price:999
    },
    {
        coursename : "data science",
price:14999
    },
    {
        coursename : "java",
price:5999
    }
]

//const values2 = course.reduce((acc,cur) => acc + cur.price, 0)

const values2 = course.reduce( function(acc,curval){
    console.log(`Course name is ${curval.coursename} & the course price is ${curval.price} `);
    return acc + curval.price
},0)

console.log(values2);










