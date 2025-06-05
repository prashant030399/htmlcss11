const User = {
    _email:"p@gmail",
    _password:"prapassword",

get email(){
    return this._email.toUpperCase()
},

set email(value){
    this._email = value 
}

}

const tea = Object.create(User)
console.log(tea.email)                       // here it ignore _


