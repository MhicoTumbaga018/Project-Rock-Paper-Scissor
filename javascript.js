function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice == 0) {
    return "rock";
  } else if (computerChoice == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  const humanChoice = prompt("Enter your choice: ");

  return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

// Decides the round winner and updates the appropriate score.
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    return "Tie";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    return "Human Win! rock beat scissor";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    return "Human Win! scissors beat paper";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    return "Human Win! paper beat rock";
  } else {
    computerScore++;
    return "Computer Win!";
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    console.log(result);
  }

  if (humanScore > computerScore) {
    return "Human wins";
  } else if (computerScore > humanScore) {
    return "Computer wins";
  } else {
    return "Tie";
  }
}
const gameResult = playGame();
console.log(gameResult);
