const user = {
    Username: "dhara",
    price:999,

    welcomwMessage: function() {
        console.log('${this.username} , welcome to website');
        console.log(this);
    }

}
// user.welcomeMessage()
// user.Username = "sau"
// user.welcomeMessage()

// console.log(this);

// function coffee(){
//     let username = "dhara"
//     console.log(this.Username)
// }

// coffee()

// const coffee = function() {
//     let username = "dhara"
//     console.log(this.username);
// }

const coffee = () => {
    let username = "dhara"
    console.log(this);
}

// coffee()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "dhara"})

console.log(addTwo(3, 4))