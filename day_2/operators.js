let a = 10;
let b = 5;

console.log(a + b);

console.log("-----");

console.log(a - b);

console.log("-----");

console.log(a * b);

console.log("-----");

console.log(a / b);

a += 2;

console.log(a);

console.log("-----");

b -= 1;

console.log(a);

console.log("-----");

const n1 = 10;
const n2 = 15;

if (n1 > n2) {
  console.log("greater number is", n1);
} else {
  console.log("greater number is", n2);
}

const x1 = 10;
const x2 = 10;

console.log("-----");

if (x1 === x2) {
  console.log("both are same");
}

let truth = true;

console.log(!truth);

console.log("-----");

let pos = 3;

let result = pos >= 0 ? "Positive" : "Negative";

console.log(`The number ${pos} is ${result}`);

console.log("Scripts");

// Function to perform basic arithmetic operations
function performArithmeticOperations(num1, num2) {
  console.log(`Numbers: ${num1} and ${num2}`);

  // Addition
  let sum = num1 + num2;
  console.log(`Addition: ${num1} + ${num2} = ${sum}`);

  // Subtraction
  let difference = num1 - num2;
  console.log(`Subtraction: ${num1} - ${num2} = ${difference}`);

  // Multiplication
  let product = num1 * num2;
  console.log(`Multiplication: ${num1} * ${num2} = ${product}`);

  // Division
  if (num2 !== 0) {
    let quotient = num1 / num2;
    console.log(`Division: ${num1} / ${num2} = ${quotient}`);
  } else {
    console.log("Division: Cannot divide by zero");
  }
}

// Example usage
let number1 = 10; // Change this to your desired number
let number2 = 5; // Change this to your desired number

performArithmeticOperations(number1, number2);
