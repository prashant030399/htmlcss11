class User {
    
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is ${this.username}`);  
    }

static createId(){     // we use static to avoid  when we call n print it
        return '123'
    }
    
}

const prashant = new  User("prashant");
//console.log(prashant.createId());                       //not running

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone","iphone@gmail")
console.log(iphone.createId());                             // not running


