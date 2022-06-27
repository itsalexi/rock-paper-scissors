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

function playRound(playerSelection, computerSelection) {
  let winner = "";
  if (playerSelection == computerSelection) {
    return "draw";
  } else if (playerSelection == "rock") {
    if (computerSelection == "scissors") {
      return "player";
    } else if (computerSelection == "paper") {
      return "computer";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "scissors") {
      return "computer";
    } else if (computerSelection == "rock") {
      return "player";
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "paper") {
      return "player";
    } else if (computerSelection == "rock") {
      return "computer";
    }
  }
}

function game() {
  // const numRounds = 5;
  let playerScore = 0;
  //for (let i = 0; i < numRounds; i++) {
  const computerSelection = computerPlay();
  const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
  round = playRound(playerSelection, computerSelection);
  if (round == "player") {
    console.log("You won!");
    playerScore++;
  } else if (round == "draw") {
    console.log("It was a draw.");
  } else {
    console.log("You lost!");
  }
  console.log(
    `You picked ${playerSelection}, while the computer picked ${computerSelection}`
  );
  //}
  console.log(`Your score was ${playerScore}`);
}
game();
