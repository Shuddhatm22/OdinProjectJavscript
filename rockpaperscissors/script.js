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

const selection = document.querySelector("#selection");
const results = document.querySelector("#results");
let playerScore = 0;
let computerScore = 0;

selection.addEventListener("click", (e) => {
  if (e.target.tagName == "BUTTON") {
    const computerSelection = getComputerChoice();
    let roundResult = playRound(e.target.id, computerSelection);
    if (roundResult == 1) playerScore++;
    else if (roundResult == -1) computerScore++;
    displayScore(playerScore, computerScore);

    if(playerScore == 5){
      //end game
      results.textContent = "You won!!";
    }
    else if(computerScore == 5){
      results.textContent = "You lose!!";
    }
  }
});


function displayScore(playerScore, computerScore) {
  results.textContent = `You : ${playerScore}, Computer : ${computerScore}`;
}

// playGame();
