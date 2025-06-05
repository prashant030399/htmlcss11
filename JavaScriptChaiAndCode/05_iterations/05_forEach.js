//u ve 3 topics to revise


// 1 we use  callback function here, that'y we don't name it
const coding =["java","c++","python"]

coding.forEach(function(element){
    //console.log(element);
})

//opimise it(arrow function)
coding.forEach((element) => {
    //console.log(element);
})

// 2 also
coding.forEach((element, index, arr) => {
 //   console.log(element, index, arr);
})



//3 objects

const myObject = [{
    user:"Prashant",
    branch:"ETC"
},
{
    user:"Aniket",
    branch:"CSE"
},
{
    user:"Shubham",
    branch:"Don't know"
}]

myObject.forEach((element) => {
    console.log(element.branch);
})


//array , object  -> preferred

