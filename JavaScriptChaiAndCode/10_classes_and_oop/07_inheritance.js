class User{
    
    constructor(username){
        this.username = username
    }
    
    logMe(){
        console.log(`Username is : ${this.username}`);
    }

}

class Teacher extends User{

    constructor(username,email,password){
        super(username)
        this.email = email 
        this.password = password
    }

    addCourse(){
        console.log(`A new course is added by ${this.username}`);        
    }

}


const chai = new Teacher("chai","chai@gmail","123");
chai.logMe()

const  masalaChai = new User("masalachai")
masalaChai.logMe()


console.log(chai instanceof Teacher);    //true
console.log(chai instanceof User);       // true       //meaning chai inherits from User. 
                                        
