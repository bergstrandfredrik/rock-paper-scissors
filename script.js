const _ROCK = "rock";
const _PAPER = "paper";
const _SCISSORS = "scissors";
const _NUMBER_OF_GAMES = 5;

const computerWins = [
  `${_PAPER} ${_ROCK}`,
  `${_SCISSORS} ${_PAPER}`,
  `${_ROCK} ${_SCISSORS}`,
];
const playerWins = [
  `${_ROCK} ${_PAPER}`,
  `${_PAPER} ${_SCISSORS}`,
  `${_SCISSORS} ${_ROCK}`,
];

let playerScore = 0;
let computerScore = 0;
let gameRound = 0;

document.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "start":
      resetGame();
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

function resetGame() {
  gameRound = 0;
  playerScore = 0;
  computerScore = 0;
  changeGameRoundTitle(gameRound);
  changeGameScoreTitle(computerScore, playerScore);
  showWinner(false);
  document.querySelector("#play").textContent = "computer : player";
}

function startGame() {
  toggleViewGameButtons(true);
  changeGameRoundTitle(gameRound);
  changeGameScoreTitle(computerScore, playerScore);
  document.querySelector("#play").style.display = "inline";
}

function toggleViewGameButtons(show) {
  const gameButtons = document.querySelectorAll(".game");
  const startButton = document.querySelector("#start");

  let showGameButtons = show ? "inline" : "none";
  let showStartButton = !show ? "inline" : "none";

  if (show) {
    startButton.style.display = showStartButton;
    gameButtons.forEach((btn) => (btn.style.display = showGameButtons));
  } else {
    startButton.style.display = showStartButton;
    gameButtons.forEach((btn) => (btn.style.display = showGameButtons));
  }
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
  if (checkIfWinningPlay(play, playerWins)) {
    playerScore++;
  } else if (checkIfWinningPlay(play, computerWins)) {
    computerScore++;
  }

  document.querySelector("#play").textContent = play;
  gameRound++;
  changeGameRoundTitle(gameRound);
  changeGameScoreTitle(computerScore, playerScore);

  if (gameRound === _NUMBER_OF_GAMES) {
    showWinner(true, computerScore, playerScore);
    toggleViewGameButtons(false);
  }
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

function showWinner(displayView, computerScore = 0, playerScore = 0) {
  const scoreBoard = document.querySelector(".score-board");
  let display = displayView ? "inline" : "none";
  if (!displayView) {
    scoreBoard.style.display = display;
    return;
  }

  scoreBoard.style.display = display;
  const h3 = document.querySelector(".winner");
  let winner = computerScore < playerScore ? "Player!" : "Computer!";
  if (computerScore === playerScore) {
    winner = "DRAW...... boring...!";
  }
  h3.textContent = winner;
}
