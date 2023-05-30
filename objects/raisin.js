const raisinAlarm = function(cookie) {
  // Put your solution here
  //Complete the function named raisinAlarm that will receive an array of strings and return the correct assessment of raisin presence.

  for (let i = 0; i < cookie.length; i++) {
    if (cookie[i] === "🍇") {
      return "Raisin alert";
    }
  }

  return "All good!";
};

//stretch
const raisinAlarmArray = function(cookies) {
  //Complete the function named raisinAlarm that will receive an array of strings and return the correct assessment of raisin presence.
  
  // Put your solution here
  //array of strings in the cookies, check the elements of the arrays, check elements for raisins.  alert for raisins.  expected output is still an array

  let results = [];
  for (let i = 0; i < cookies.length; i++) {
    for (let y = 0;  y < cookies[i].length; y++) {
      if (cookies[i][y] === "🍇") {
       
        results.push("Raisin alert");
        break;
      } else {
        if (y === cookies[i].length - 1)
          results.push("All good!");
  
      }
    }
  }
  return results;

};

console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);


// console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
// console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
// console.log(raisinAlarm(["🍫", "🍫", "🍫"]));


//another way of doing it

// const raisinAlarm = function(cookie) {
//   for (const item of cookie) {
//     if (item === "🍇") {
//       return "Raisin alert!";
//     }
//   }
//   return "All good!";
// };
// console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
// console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
// console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

// *Stretch
// const raisinAlarmArray = function(cookies) {
//   
//   let result = [];
//   for (let cookie of cookies) {
//     result.push(raisinAlarm(cookie));
//   }
//   return result;
// };

// console.log(raisinAlarmArray(
//   [
//     ["🍫", "🍫", "🍇", "🍫"],
//     ["🍫", "🍇", "🍫", "🍫", "🍇"],
//     ["🍫", "🍫", "🍫"]
//   ]
// ));