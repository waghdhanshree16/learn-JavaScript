// singleton
// object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Dhara",
    "full name": "Dhara patil",
    [mySym]: "mykey1",
    age: 18,
    location: "jaipur",
    email: "Dhara@hvhcd.com",
    isloggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "Dharap@hfdsjd.com"
//Object.freeze(JsUser)
JsUser.email = "Dharap@jfhdg.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log('Hello JS user, ${this.name}');
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());