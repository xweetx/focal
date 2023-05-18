function whatToDoForLunch(hungry, availableTime) {
  if(hungry){
    if(availableTime > 0 && availableTime < 20){
      console.log("I want to pick something up and eat it in the lab!");
    } else if(availableTime <= 30){
      console.log("I want to try a place nearby!");
    } else if(availableTime > 30) {
      console.log("I am in a bootcamp. How could I have that much of time! I must be CRAZY!!!");
    }


  }else{
    console.log("I should go back to work!");
  }
}
whatToDoForLunch(true, 20)
whatToDoForLunch(true, 50)
whatToDoForLunch(false, 30)
