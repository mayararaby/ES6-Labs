var fruits = ["apple", "strawberry", "banana", "orange", "mango"];
//a
console.log(fruits.every(i => (typeof i === "string")));

//b
console.log(fruits.some(i => (i.startsWith('a'))));

//c
console.log(fruits.filter((i) => i.startsWith("s") || i.startsWith("b")));

//d
let answer = arr => {
    let newArr = fruits.map(function(e) {
        return "I like " + e;
    });
    return newArr;
}

//e
answer(fruits).forEach(element => console.log(element));