const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);

const shoppinCart = [
    {
        itemName: "js course",
        price: 2777
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile devops course",
        price: 6995
    },
    {
        itemName: "js course",
        price: 3100
    },
    {
        itemName: "data science course",
        price: 12800
    },
]

const priceToPay = shoppinCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);