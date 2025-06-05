//u ve 5 topics to revise
//1

let a = 100;       // firstly this line is commented
var  c = 300 ;

if(true){
    let  a = 10;
    const b = 20  ;
    var c = 30;     //can be only c = 30 
    // console.log("inner",a);
}

// console.log(a);
// console.log(b);
// console.log(c);


//////////////////////////

//next video
//2
function one(){
    const username = "hitesh";

    function two(){
        const website = " youtube";
        console.log(username);
    }

    //console.log(website);
two()

}

one()


//3
if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube";
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// +++++++++++++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++++++++++++++

//4
console.log(addone(5));

function addone(num){
return num +1;
}


//5
// u can't access 'addTwo'  before initilization
// console.log(addTwo(5));
const addTwo  = function (num){
    return num +2;
}


//please see the image - VarLetConst     in d folder