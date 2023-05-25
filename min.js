const min = function(numbers) {
  let minimum = numbers[0];

  //this checks for the lowest number
  for (let i = 1; i < numbers.length; i++) {
    // this will keep the number looping until the lowest number is determined
    if (numbers[i] < minimum) {
      minimum = numbers[i];
    }
  }
  //Return the minimum value
  //Returns minimum then sends it to console until last array is done
  return minimum;
};


/*
 * This is some test runner code that's simply calling our min function defined
 * above to verify it's returning the proper minimum. Do not modify it!
 */

const flightPrices = [1260, 490, 599, 1400, 820];
console.log(`The cheapest flight amongst $1260, $490, $599, $1400 and $820 costs $${min(flightPrices)}`);

const golfScores = [-1, 3, 0, -4, 1, 4, -2];
console.log(`The winning golf score amongst -1, 3, 0, -4, 1, 4 and -2 is ${min(golfScores)}`);

const pageNumbers = [232];
console.log(`The shortest book out of a list of single book with 232 pages has ${min(pageNumbers)} pages`);

const temperatures = [45, 10, -20, 0, 3, -20];
console.log(`The coldest temperature amongst 45C, 10C, -20C, 0C, 3C and -20C is ${min(temperatures)}C`);

/* const min = function(numbers) {
  let minvalue = numbers[0];
  for (let number of numbers) {
    if (minvalue > number) {
      minvalue = number;
    }
  }
  return minvalue;

};*/