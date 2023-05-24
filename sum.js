// perform mathematical operations
let args = process.argv;
//reads file directory
console.log(args.slice(2)); //prints prog, file direct., args

//slice removes some directory from terminal
args = args.slice(2);
console.log(Number(args[0]) + Number(args[1]))


