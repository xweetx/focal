// trying to see if this works
const numDice = parseInt(process.argv[2]);

if (isNaN(numDice) || numDice <= 0) {
  console.log("Invalid input. Please provide a positive integer.");
} else {
  const results = [];

  for (let i = 0; i < numDice; i++) {
    const roll = Math.floor(Math.random() * 6) + 1;
    results.push(roll);
  }

  console.log(`Rolled ${numDice} dice: ${results.join(", ")}`);
}