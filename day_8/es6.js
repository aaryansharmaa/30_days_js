let name = "speed";
let age = "22";

console.log(`The name is ${name} and his age is ${22}`);

const multiline = `This is multiline. 
Write across multiple lines.
Like this
`;

console.log(multiline);

let numbers = [1, 2, 3, 4];

const [first, second, ...rest] = numbers;

console.log(`first is ${first}, second is ${second} and rest are ${rest}`);

// spread operator is used to expand elements of one array into a new array

// rest operator is used to get the remaining values

let numbers2 = [5, 6, 7, 8];

let newarr = [...numbers, ...numbers2];

console.log(newarr);
