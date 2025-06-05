// u ve 4 topics to revise 

const coding = ["js", "java", "python"]
//1
const values = coding.forEach((element) => {   
    return element;
})

//console.log(values);

//2
// forEach doesn't return that's y filter comes
// filter used for true/ false (condition)

const myArray = [ 1,2,3,4,5];

const values1 = myArray.filter((element) => element >3)

// const values1 = myArray.filter((element) => {
//     return element > 3
// })

//console.log(values1);


//3 if u ve to use forEach 

const myArrayNew = [] ;

myArray.forEach((element) => {
    if (element > 3){
myArrayNew.push(element);
    }
})

//console.log("My array new elements is - ",myArrayNew);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=+

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//4
const values4  = books.filter((element) => element.publish >= 2009 && element.edition > 2015)
console.log(values4);



