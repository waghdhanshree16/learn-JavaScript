function User(email,password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this.email = value
        }
    })

    // Object.defineProperty(this, 'email', {
    //     get: function(){
    //         return this._email.toUpperCase()
    //     },
    //     set: function(value){
    //         this.email = value
    //     }
    // })
}

const coffee = new User("coffee@coffee.com", "coffee")

console.log(coffee.email);