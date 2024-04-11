function getComputerChoice() {
  let options = ["Rock", "Paper", "Scissors"];
  let randomNumber = Math.floor(Math.random() * 3);
  return options[randomNumber];
}

function playRound(playerSelection, computerSelection) {
  let playerSelectionLower = playerSelection.toLowerCase();

  switch (computerSelection) {
    case "Rock":
      switch (playerSelectionLower) {
        case "rock":
          console.log(`This is a tie`);
          return 0;
        case "paper":
          console.log(`You win. paper beats rock!`);
          return 1;
        case "scissors":
          console.log("You lose, rock beats scissor");
          return -1;
      }
      break;
    case "Paper":
      switch (playerSelectionLower) {
        case "rock":
          console.log(`You lose. paper beats rock!`);
          return -1;
        case "paper":
          console.log(`This is a tie`);
          return 0;
        case "scissors":
          console.log("You win, scissor beats paper");
          return 1;
      }
      break;
    case "Scissors":
      switch (playerSelectionLower) {
        case "rock":
          console.log("You win, rock beats scissor");
          return 1;
        case "paper":
          console.log("You lose, scissor beats paper");
          return -1;
        case "scissors":
          console.log(`This is a tie`);
          return 0;
      }
      break;
    default:
      break;
  }
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Whats your selection?");
    const computerSelection = getComputerChoice();
    let roundResult = playRound(playerSelection, computerSelection);

    if (roundResult == 1) playerScore++;
    else if (roundResult == -1) computerScore++;
  }

  displayGameResult();
}

function displayGameResult(playerScore, computerScore) {
  if (playerScore > computerScore) {
    console.log("You won the game!!");
  } else if (playerScore < computerScore) {
    console.log("You lost the game!!");
  }
  else{
    console.log("Game tied!!");
  }
}

playGame();