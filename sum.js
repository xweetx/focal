
// perform mathematical operations
const args = process.argv;
let num1 = Number(args[2]); // access for the first argument value
let num2 = Number(args[3]); // access for the second argument value

console.log({
    sum: num1 + num2,
})