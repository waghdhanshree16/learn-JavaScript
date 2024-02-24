// let myName = "dhara     "
// let mychannel = "coffee     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.dhara = function(){
    console.log(`Dhara is present in all objects`);
}

Array.prototype.heyDhara = function(){
    console.log(`Dhara says hello`);
}

// heroPower.dhara()
// myHeros.dhara()
// myHeros.heyDhara()
// heroPower.heyDhara()

// inheritance

const User = {
    name: "coffee",
    email: "coffee@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "CoffeeorCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"dhara".trueLength()
"icecoffee".trueLength()