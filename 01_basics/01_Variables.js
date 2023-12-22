const accountId = 245656
let accountEmail = "Dhara"
var accountPassword = 153223
accountCity = "Mumbai"
let accountState;

// accountId = 2 // not allowed

accountEmail = "hd@hf.com"
accountPassword = "4243553"
accountCity = "Jaipur"

console.log(accountId);

/* 
Prefer not to use var
because of issue in block scope and functional scopes */

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])