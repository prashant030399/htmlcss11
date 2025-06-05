// u ve to revise 28 topics here

const name = "prashant";
const repoCount =50;

// console.log(`My name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Hi-my-name-is-prashant');


// in console copy the  upper para then enter then after write gameName
// also search in google ->  trim(any type) js mdn or any topic u see in the prototype


console.log("Prashant");

//1  console.log(gameName[0]);
console.log(gameName.__proto__);

//2 const random = "    Prashant     ";
// console.log(random.trim());



// console.log(random.trimStart());

//3 // console.log(gameName.length);
//4// console.log(gameName.toUpperCase());

//5 console.log(gameName.charAt(8));
//6 console.log(gameName.indexOf('i'))    // give the  value of only first occurrence of i

//7 console.log(gameName.substring(0,4));   //won't take the element at index 4

//8 console.log(gameName.slice(0,4));    //u can take minus value also here

const url = "https://prashant.com/prashant%20dewangan"

//9 console.log(url.includes('https'));

 // console.log(url.replace('%20', '-'));

  console.log(gameName.split('-'))

const array1= ["name","place","thing","animal"];
const array2 = ["monday", "tuesday","wednesday"];
 //console.log(array1.concat(array2));

const array3 = [2,"3","4"];
//13  const alpha = array1.concat("Prashant",array2,array3);
// console.log(alpha);


const num1 = [[1]] ;
const num2 = [[2],3];

 //num1[0].push(4);    /// this is most imp
 //console.log(num1,num2);



//------------------------------------------------------------
let arr1 = [1, 2];
let obj = { 0: "a", 1: "b", length: 2 };

// By default, objects are not spreadable
//15 console.log(arr1.concat(obj));  
// Output: [1, 2, { '0': 'a', '1': 'b', length: 2 }]

// Making an array-like object spreadable
//16imp    obj[Symbol.isConcatSpreadable] = true;
// console.log(arr1.concat(obj));  
// Output: [1, 2, 'a', 'b']


// Symbol.isConcatSpreadable = true, we tell concat() to treat the object like an array and spread its elements.

//----------------------------------------------------------------------------------

//-----------------------------------------------------------------
//17 
//constructor

// class Person {
//     constructor(name) {
//       this.name = name;
//     }
  
//     introduce() {
//       console.log(`Hello, my name is ${this.name}`);
//     }
//   }
  
//   const otto = new Person("Otto");
  
//   otto.introduce(); // Hello, my name is Otto

//constructor mdn js   - search on google Most IMP












//----------------------------------------------------------------

//18 SYNTAX OF ENDSWITH
// endsWith(searchString)
// endsWith(searchString, endPosition)

//19 //SYNTAX OF INDEXOF
// indexOf(searchElement)
// indexOf(searchElement, fromIndex)

//20 //SYNTAX OF SPLIT       - it means converting them into array
// split(separator)
// split(separator, limit)


//18.1
//const str = "Hello JavaScript";
//console.log(str.endsWith("Java", 10));  // true
//"Hello JavaScript".slice(0, 10) → "Hello Java"
//"Hello Java" ends with "Java", so ✅ true

// const myString = "Hello World. How are you doing?";
// const splits = myString.split(' ', 3);

// console.log(splits); // [ "Hello", "World.", "How" ]


//21 SYNTAX OF SUBSTRING
// substring(indexStart)
// substring(indexStart, indexEnd)

//22 SYNTAX OF SUBSTR
// substr(indexStart)
// substr(indexStart,length)

//23 SYNTAX OF SLICE
// slice()
// slice(start)
// slice(start, end)


const anyString = "Mozilla";
console.log(anyString.substring(4, 7)); // "lla"
console.log(anyString.substring(7, 4)); // "lla"

console.log(anyString.substr(0));

//The substring() method swaps its two arguments 
// if indexStart is greater than indexEnd, 
// meaning that a string is still returned. 
//24  The slice() method returns an empty string if this is the case.

//25
const text = "Mozilla";
console.log(text.substring(5, 2)); // "zil"
console.log(text.slice(5, 2)); // "

//26  //M.IMP
//If either or both of the arguments are negative or NaN, 
// the substring() method treats them as if they were 0.

console.log(text.substring(-5, 2)); // "Mo"
console.log(text.substring(-5, -2)); // ""


  //SYNTAX OF SLICE
  // slice()
  // slice(start)
  // slice(start, end)

  const animals = ["ant", "bison", "camel", "duck", "elephant"];
  //27
      console.log(animals.slice(-2));
  // Expected output: Array ["duck", "elephant"]
  //28
  console.log(animals.slice(2, -1));
  // Expected output: Array ["camel", "duck"]




