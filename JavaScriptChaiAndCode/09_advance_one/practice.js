fetch('https://jsonplaceholder.typicode.com/users')
.then((data) => {
return data.json() 
}).then((website)=> {
console.log(website);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("The promise is resolved");
})

    
    





