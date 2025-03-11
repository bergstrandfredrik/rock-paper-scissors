/* 
psuodo code for this project.

Get the computers choice ---- DONE
Then the players choice ---- DONE
now play the game and lets see who beat who. ----- DONE
display the result and keep the score as long as the game is played.
*/

const computerWins = ["paper rock", "scissors paper", "rock scissors"];
const playerWins = ["rock paper", "paper scissors", "scissors rock"];

let playerScore = 0;
let computerScore = 0;

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  return choice[getRandomNumber(3)];
}

function getPlayerChoice() {
  let str = prompt("What is your choice? rock, paper or scissors...");
  return str.toLowerCase();
}

function checkIfWinningPlay(play, arrOfWins) {
  for (let i = 0; i < arrOfWins.length; i++) {
    if (play === arrOfWins[i]) {
      return true;
    }
  }
  return false;
}
function playRound(computerChoice, playerChoice) {
  const play = `${computerChoice} ${playerChoice}`;
  console.log(`Computers choice and players choice: ${play}`);
  if (checkIfWinningPlay(play, playerWins)) {
    console.log("Player wins!");
    playerScore++;
  } else if (checkIfWinningPlay(play, computerWins)) {
    console.log("Computer wins!");
    computerScore++;
  } else {
    console.log("Draw....");
  }
  return;
}

// for (let i = 1; i <= 5; i++) {
//   console.log(`Round ${i}`);
//   playRound(getComputerChoice(), getPlayerChoice());
// }

console.log(
  `Score after 5 rounds. Computer: ${computerScore} and Player: ${playerScore}`
);
