function setUsername(username){
    this.username = username
    console.log("called");
}

function createUser(username, email, password ){

    setUsername.call(this, username)                          //syntax        
    this.email = email
    this.password = password
}

const call = new createUser("prashant","p@gmail.com","99")
console.log(call);









