function diceGame(){
  let userchoice = prompt("Choose a number 1 - 6");
  let hilo = prompt("high or low?");
  let dicevalues = [1, 2, 3, 4, 5, 6];
  let diceroll = dicevalues[Math.floor(Math.random() * dicevalues.length)];
  let result = "";
    if (userchoice >= 7) {
    result = `Only 6 sides on a dice. 💩`
    }
    else if (userchoice == diceroll) {
      result = `You lose 😂 try again. Dice roll: ${diceroll}.`
    }
    else if(userchoice < diceroll && hilo == "high") {
      result = `You win 🏆 Dice roll: ${diceroll}.`
    }
    else if(userchoice < diceroll && hilo == "low") {
      result = `You lost 😂 Dice roll: ${diceroll}.`
    }
    else if(userchoice > diceroll && hilo == "low") {
      result = `You win 🏆 Dice roll: ${diceroll}.`
    }
    else if(userchoice > diceroll && hilo == "high") {
      result = `You lost 😂 Dice roll: ${diceroll}.`
    }
    else if (userchoice || hilo == null || " ") {
      result = `Quit goofin off & lern2spell 😒`
    };
  document.getElementById("result").innerHTML = result;
  console.log(diceroll)
};
