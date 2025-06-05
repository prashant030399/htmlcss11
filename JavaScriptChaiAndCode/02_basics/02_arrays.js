//U ve 8 topic to revise 

const marvel_heroes = ["Spiderman","Ironman","Thor"];
const dc_heroes = ["Superman","Flash","Batman"];

//1 marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);

//2 console.log(marvel_heroes[3][1]);

//3   
// console.log(marvel_heroes.concat(dc_heroes));


//4 spread Operator
// const allHeroes = [...dc_heroes, ...marvel_heroes];
// console.log(allHeroes);


//5
// const anotherArray = [1,2,3,[4,5,6], [7,6,[5,6,8]]];
// const realanotherArray = anotherArray.flat(2)    //because upto 2 level array into array can be (infinity)
// console.log(realanotherArray);


//6,7 imp 
console.log(Array.isArray("Prashant"));
console.log(Array.from("Prashant"));    //convert string into array   (.join   to string)


let score1 = 100;
let score2 = 200;
let score3 = 300;
//8
console.log(Array.of(score1,score2,score2));   //convert into Array

























