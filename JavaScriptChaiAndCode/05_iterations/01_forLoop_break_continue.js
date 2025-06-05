// u ve 3 topics to revise

//1
// for(let i =1  ; i<=10 ; i++){
//     console.log(`Table of ${i}`);
//     for(let j=1 ; j<=10 ; j++){
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }


//2 3 break & continue

// for(let i=1 ; i<= 10 ; i++){
//     if(i == 5){ 
//     console.log(`Detected 5 `);
//     break;
//     }
//     console.log(`Value of i is  ${i} `);
// }

//3 continue     //skip the current value 

for(let i=1  ; i<= 10 ; i++){
    if(i == 5){
        console.log("Detected 5");
        continue;
    }
    console.log(`Value of i is ${i}`);
}