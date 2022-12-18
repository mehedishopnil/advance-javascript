const numbers = [34, 23, 10];
// const output = [];
// for (let i = 0; i < numbers.length; i++){
//     const position = numbers[i];
//     const result = position * position;
//     output.push (result);

// }

const result = numbers.map(x => x * x);
console.log(result);

const greater = numbers.filter(z => z > 20);
console.log(greater);