// Firstif you're hungry or not; second—how much time you have. You want your program to tell you to wait until you're hungry if you're not. If you are hungry, you want your program to do one of the following three things.

// If you have less than 20 minutes, you want your program to tell you to pick up a snack or grab something you have ready at home.
// If you have at least 20 minutes but no more than 30 (because you've been working hard and are ahead of schedule), you want your program to tell you that you deserve a break and should take time to cook a tasty meal.
// If you have more than 30 minutes, you want your program to remind you that this is an intense program after all and you should probably reconsider.




function whatToDoForLunch(hungry, availableTime) {
  if (hungry) {
    if (availableTime > 0 && availableTime < 20) {  
    console.log("Need to get prepared meal from home"); 
     } // < 20 minutes - pick up or grab from home.
      else if (availableTime >=20 && availableTime <=30) {
    console.log("Need a break and cook");
     }  
      else if (availableTime >30) {
      console.log ("I need to keep moving");
     }
    }   
  else {
    console.log("I should go back to work!");
      }

};
whatToDoForLunch(true, 18)
whatToDoForLunch(true, 50)
whatToDoForLunch(false, 30)
