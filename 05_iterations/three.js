// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);

}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

// Maps 

const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of America")
map.set('Fr', "France")
map.set('In', "India")

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObjects = {
    games1: 'NFS',
    game2 : 'Spiderman'
}

// for (const [key, value] of mapObject) {
//     console.log(key, ':-', value);
// }