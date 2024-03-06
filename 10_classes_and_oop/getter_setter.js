class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this.email.toUpperCase()
    }

    set email(value){
        this._email = value
    }
    
    get password() {
        return `${this._password}dhara`
    }

    set password(value){
        this._password = value
    }
}

const dhara = new User("d@dhara.ai", "123")
console.log(dhara.password);