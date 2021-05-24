let firstNumber = prompt('Enter the first variable: ');
let secondNumber = prompt('Enter the second variable: ');

console.log(`The value of First Number before swapping: ${firstNumber}`);
console.log(`The value of Second Number before swapping: ${secondNumber}`);

[firstNumber, secondNumber] = [secondNumber, firstNumber];

console.log(`The value of First Number after swapping: ${firstNumber}`);
console.log(`The value of Second Number after swapping: ${secondNumber}`);