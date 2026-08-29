function getComputerChoice() {
  // Generates a random number between 0 and 2.
  const computerChoice = Math.floor(Math.random() * 3);

  // Convert the random number into a Rock, Paper, or Scissors choice.
  if (computerChoice == 0) {
    return "rock";
  } else if (computerChoice == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  // Ask the player for their choice.
  const humanChoice = prompt("Enter your choice: ");

  // Return the player's input.
  return humanChoice;
}

// Keep track of the scores.
// We use let because the scores will change during the game.
let humanScore = 0;
let computerScore = 0;

// Play one round and update the appropriate score.
function playRound(humanChoice, computerChoice) {
  // Convert the player's input to lowercase.
  // This makes "Rock", "ROCK", and "rock" work the same way.
  humanChoice = humanChoice.toLowerCase();

  // If both players choose the same thing, the round is a tie.
  if (humanChoice === computerChoice) {
    return "Tie";

    // Rock beats scissors.
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    return "Human wins! Rock beats scissors.";

    // Scissors beats paper.
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    return "Human wins! Scissors beats paper.";

    // Paper beats rock.
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    return "Human wins! Paper beats rock.";

    // If none of the human's winning conditions happened,
    // the computer wins.
  } else {
    computerScore++;
    return "Computer wins!";
  }
}

// Play the complete five-round game.
function playGame() {
  // Repeat the round five times.
  for (let i = 0; i < 5; i++) {
    // Get a new choice from the human.
    const humanChoice = getHumanChoice();

    // Generate a new choice for the computer.
    const computerChoice = getComputerChoice();

    // Play the round using both choices.
    // playRound() returns the result and updates the score.
    const result = playRound(humanChoice, computerChoice);

    // Display the result of the current round.
    console.log(result);
  }

  // After all five rounds, compare the final scores.
  if (humanScore > computerScore) {
    return "Human wins the game!";
  } else if (computerScore > humanScore) {
    return "Computer wins the game!";
  } else {
    return "The game is a tie!";
  }
}

// Start the game and store the final result.
const gameResult = playGame();

// Display the final game result.
console.log(gameResult);

// Display the final scores.
console.log("Human score:", humanScore);
console.log("Computer score:", computerScore);
