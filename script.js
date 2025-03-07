/* 
psuodo code for this project.

Get the computers choice ---- DONE
Then the players choice
now play the game and lets see who beat who.
display the result and keep the score as long as the game is played.
*/

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  return choice[getRandomNumber(3)];
}

function getPlayerChoice() {
  return prompt("What is your choice? rock, paper or scissors...");
}

let computerChoice = getComputerChoice();
let playerChoice = getPlayerChoice();

console.log(computerChoice);
console.log(playerChoice);
