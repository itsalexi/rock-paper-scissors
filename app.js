let playerScore = 0;
let computerScore = 0;
let gameStarted = true;

// Game Container
const gameContainer = document.querySelector(".game");

computerSelectElement = gameContainer.querySelector("#computerSelect");
playerSelectElement = gameContainer.querySelector("#playerSelect");
gameTextElement = gameContainer.querySelector("#gameText");
gameInfoElement = gameContainer.querySelector("#gameInfo");

// Score Container
const scoreContainer = document.querySelector(".score");
playerScoreElement = scoreContainer.querySelector("#playerScore");
computerScoreElement = scoreContainer.querySelector("#computerScore");

function computerPlay() {
  random = Math.floor(Math.random() * 3) + 1;
  switch (random) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors";
      break;
  }
}

function playRound(playerSelection) {
  let computerSelection = computerPlay();

  if (playerSelection == computerSelection) {
    gameTextElement.innerHTML = "It's a draw!";
    console.log("Draw");
  } else if (playerSelection == "rock") {
    if (computerSelection == "scissors") {
      playerScore++;
      gameTextElement.innerHTML = "You won!";
    } else if (computerSelection == "paper") {
      computerScore++;
      gameTextElement.innerHTML = "You lose!";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "scissors") {
      computerScore++;
      gameTextElement.innerHTML = "You lose!";
    } else if (computerSelection == "rock") {
      playerScore++;
      gameTextElement.innerHTML = "You won!";
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "paper") {
      playerScore++;
      gameTextElement.innerHTML = "You won!";
    } else if (computerSelection == "rock") {
      computerScore++;
      gameTextElement.innerHTML = "You lose!";
    }
  }
  checkScore(playerScore, computerScore);

  computerSelectElement.innerHTML = computerSelection;
  playerSelectElement.innerHTML = playerSelection;

  playerScoreElement.innerHTML = playerScore;
  computerScoreElement.innerHTML = computerScore;
}

function checkScore(pScore, cScore) {
  if (pScore == 5 || cScore == 5) {
    if (pScore > cScore) {
      startGame();
      //win
    } else if (cScore > pScore) {
      //lose
      startGame();
    } else {
      //draw
      startGame();
    }
  }
}

function startGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreElement.innerHTML = playerScore;
  computerScoreElement.innerHTML = computerScore;
  playerSelectElement.innerHTML = "";
  gameTextElement.innerHTML = "Welcome to Rock Paper Scissors!";
}

function selectPlayerChoice(e) {
  let choice = e.target;
  if (e.target.tagName !== "BUTTON") return;
  if (choice.id == "rock") {
    playRound("rock");
  }
  if (choice.id == "paper") {
    playRound("paper");
  }
  if (choice.id == "scissors") {
    playRound("scissors");
  }
}

startGame();

document.addEventListener("click", selectPlayerChoice);
