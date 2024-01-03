  function sayMyName(){
    console.log("D");
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("A");
  }

  // sayMyName()

  //function addTwoNumbers(number1, number2){
    // console.log(number1 + number2)
  // }

  function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
    
  }

  const result = addTwoNumbers(3, 6)

  //console.log("Result: ", result);

  function loginUserMessage(username = "sau"){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return '${username} just logged in'
  }

  // console.log(loginUserMessage("Dhara"))
  // console.log(loginUserMessage())

  function calculateCartPrice(...num1){
    return num1
  }

  // console.log(calculateCartPrice(200, 400, 500, 2000))

  const user = {
    username: "dhara",
    price: 199
  }

  function handleObject(anyobject){
    console.log('Username is ${anyobject.username} and price is ${anyobject.price}');
  }

 // handleObject(user)

  handleObject({
    username: "sau",
    price: 399
  })
  
  const myNewArray = [200, 400, 100, 600]

  function returnSecondValue(getArray){
    return getArray[1]
  }
  // console.log(returnSecondValue(myNewArray))
  console.log(returnSecondValue([200, 400, 500, 100 ]))


