// u ve 2 topics to revise

const myArray = [ 1,2,3,4,5]

//1
//const value = myArray.map((element) => element + 10  )

//2
const value = myArray
.map((element) => element * 10)
.map((element) => element +1 )
.filter((element) => element >= 31)

console.log(value);


// db map n filter