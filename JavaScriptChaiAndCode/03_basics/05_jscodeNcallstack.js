// u ve 2  things to revise

//1 js code execution
// please see the image - lec25 in d folder


//2 call stack
//Inspect -> source  -> workspace -> snippets -> new snippets -> chaiaurcode.js
// run it and see the ans in call stack

function one(){
    console.log("one");
    two();
}

function two(){
    console.log("two");
    three();
}

function three(){
    console.log("three");
}

one();
two();
three();



