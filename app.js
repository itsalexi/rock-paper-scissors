let playerScore = 0;
let computerScore = 0;
const gameContainer = document.querySelector(".game");
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
  computerSelectElement = gameContainer.querySelector("#computerSelect");
  playerSelectElement = gameContainer.querySelector("#playerSelect");
  let computerSelection = computerPlay();

  if (playerSelection == computerSelection) {
    playerScore++;
    computerScore++;
    console.log("Draw");
  } else if (playerSelection == "rock") {
    if (computerSelection == "scissors") {
      playerScore++;
      console.log("Win");
    } else if (computerSelection == "paper") {
      computerScore++;
      console.log("Lose");
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "scissors") {
      computerScore++;
      console.log("Lose");
    } else if (computerSelection == "rock") {
      playerScore++;
      console.log("Win");
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "paper") {
      playerScore++;
      console.log("Win");
    } else if (computerSelection == "rock") {
      computerScore++;
      console.log("Lose");
    }
  }
  computerSelectElement.innerHTML = computerSelection;
  playerSelectElement.innerHTML = playerSelection;
}

// function game() {

// }

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

document.addEventListener("click", selectPlayerChoice);
