//const myArr = []
//%DebugPrint(myArr)

/*
2 Types of Arraya
1) continous(packed)  
2) holey(when there is hole in array)

*/

//SMI (small integer)
//Double (float, sting, function)
//Packed element

const arrTwo = [1,2,3,4,5]
//PACKED_SMI_ELEMENTS 

arrTwo.push(6.0)
//PACKED_DOUBLE_ELEMENTS

arrTwo.push('7')
//PACKED_ELEMENTS       coz of string

arrTwo[10] =11 
//HOLEY_ELEMENTS


// console.log(arrTwo)
// console.log(arrTwo.length)
// console.log(arrTwo[9])
// console.log(arrTwo[19])

//whenever we have HOLEY ARRAY , this 4 condn  it has to gone through 
//bound check
// hasOwnProperty(arrTwo, 9)       // 9 is the position 
// hasOwnProperty(arrTwo.prototype, 10)
// hasOwnProperty(Object.prototype, 10)


//holes are very expensive in js 

const arrThree = [1,2,3,4,5]
console.log(arrThree[2]);


// we have properties in object n elements in array


//SMI > Double > PACKED  >    
// H_SMI  >   H_DOUBLE   >  H_PACKED
//where SMI is the most optimised n H_PACKED(HOLEY_PACKED) is the least


const arrFour = new Array(3)
//just 3 holes.   HOLEY_SMI_ELEMENTS

arrFour[0] = '1'  //HOLEY_ELEMENTS
arrFour[1] = '2'  //HOLEY_ELEMENTS
arrFour[2] = '3'  //HOLEY_ELEMENTS

//Once degrade(less optimised) it wouldn't come back to normal even if it was deleted(pop)
//that's why comes with arrFive  

const arrFive = []
arrFive.push('1')  //PACKED_ELEMENTS
arrFive.push('2')  //PACKED_ELEMENTS
arrFive.push('3')  //PACKED_ELEMENTS


const arrSix = [1,2,3,4,5]
arrSix.push(Infinity)
arrSix.push(null)
console.log(arrSix)


// for,  for-of ,  forEach   - preferred











