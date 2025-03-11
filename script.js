const _ROCK = "rock";
const _PAPER = "paper";
const _SCISSORS = "scissors";

const computerWins = ["paper rock", "scissors paper", "rock scissors"];
const playerWins = ["rock paper", "paper scissors", "scissors rock"];

let playerScore = 0;
let computerScore = 0;
let gameRound = 0;

document.addEventListener("click", (e) => {
  console.log(e.target.id);

  switch (e.target.id) {
    case "start":
      startGame();
      break;
    case _ROCK:
      playRound(getComputerChoice(), _ROCK);
      break;
    case _PAPER:
      playRound(getComputerChoice(), _PAPER);
      break;
    case _SCISSORS:
      playRound(getComputerChoice(), _SCISSORS);
      break;
  }
});

function startGame() {
  const startButton = document.querySelector("#start");
  const gameButtons = document.querySelectorAll(".game");
  startButton.style.display = "none";
  changeGameRoundTitle(gameRound);
  changeGameScoreTitle(computerScore, playerScore);
  gameButtons.forEach((btn) => (btn.style.display = "inline"));
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  const choice = [_ROCK, _PAPER, _SCISSORS];
  return choice[getRandomNumber(3)];
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

  gameRound++;
  changeGameRoundTitle(gameRound);
  changeGameScoreTitle(computerScore, playerScore);

  return;
}

function changeGameRoundTitle(gameRound) {
  const gameTitle = document.querySelector("#game-title");
  gameTitle.textContent = `GAME ${gameRound}`;
}

function changeGameScoreTitle(computerScore, playerScore) {
  const gameScore = document.querySelector("#game-score");
  gameScore.textContent = `AI - YOU: ${computerScore} - ${playerScore}`;
}
