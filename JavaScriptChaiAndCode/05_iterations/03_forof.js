// u ve 3 topics to revise


//for of

// ["", "", ""]
// [{},{},{}]

//1

//here object is not that object  that u r thinking (here object can be anything - array, object,string etc)

//syntax
// for (const element of object) {
    
// }


const arr = [1,2,3,4,5];

for (const element of arr) {
    // console.log(element);
}
//2
const greeting = "Welcome"

for (const element of greeting) {
//    console.log(element);
}
//3
//+++++++++++++++++++++++++++++ Map ++++++++++++++++++++++++++++++++++++++++++++++++++
//map is not iterable
//map u shd consider datatypes(eg object) n not loop

const map = new Map();
map.set('IN', "India")
map.set('USA',"United States of America")
map.set('FR', "France")

//console.log(map);

for (const [key,value] of map) {
    //console.log(key, ':-', value);
}


//array,string,   -> preferred
// map
