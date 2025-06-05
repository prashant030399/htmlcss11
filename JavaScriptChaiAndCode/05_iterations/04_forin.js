//u ve 3 topics to revise

//for of is not  applicable in object , coz object is not iterable that's y for in come

//1
const myObject  = {
    js:"javascript",
    py:"python",
java:"java"
}

for (const key in myObject) {
   console.log(`${key} shortcut is for ${myObject[key]}`)
}


//2 array
const myArray = [1,2,3,4,5]
for (const element in myArray) {
 //console.log(myArray[element]);
}
// i  think for of is more suitable for array


//3 map
const map = new Map()
map.set('IN', "India")
map.set('USA',"United States of America")
map.set('FR', "France")

for (const key in map) {
   console.log(key);
}


//object , map   -> preferred

