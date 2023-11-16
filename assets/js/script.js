// Declare constants for scores
const userScoreElement = document.getElementById("user-score");
const computerScoreElement = document.getElementById("computer-score");
const resultElement = document.getElementById("result");
const explainElement = document.getElementById("explain-game");

// Initialize scores
let userScore = 0;
let computerScore = 0;

// Function to handle user choice
function userChoice(choice) {
  console.log("User chose:", choice);

  if (userScore < 3 && computerScore < 3) {
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    console.log("Computer chose:", computerChoice);

    const result = getResult(choice, computerChoice);

    console.log("Result:", result);

    displayResult(result, computerChoice);
  }

  if (userScore === 3 || computerScore === 3) {
    endGame();
  }
}

// Function to get the result of the game
function getResult(user, computer) {
  console.log("Comparing choices:", user, "vs", computer);

  if (user === computer) {
    resultElement.style.color = "white";
    return "It's a tie!";
  }

  if (
    (user === "rock" && (computer === "scissors" || computer === "lizard")) ||
    (user === "paper" && (computer === "rock" || computer === "spock")) ||
    (user === "scissors" && (computer === "paper" || computer === "lizard")) ||
    (user === "lizard" && (computer === "spock" || computer === "paper")) ||
    (user === "spock" && (computer === "scissors" || computer === "rock"))
  ) {
    userScore++;
    resultElement.style.color = "lightgreen";
    console.log("You win!");
    return "You win!";
  } else {
    computerScore++;
    resultElement.style.color = "red";
    console.log("You lose!");
    return "You lose!";
  }
}

// Function to display the result
function displayResult(result, computerChoice) {
  console.log("Displaying result:", result, "Computer chose:", computerChoice);

  resultElement.innerHTML = `${result} Computer chose ${computerChoice}.`;
  userScoreElement.textContent = userScore;
  computerScoreElement.textContent = computerScore;
}

// Function to handle the end of the game
function endGame() {
  console.log("Game over!");

  if (userScore === 3) {
    resultElement.innerHTML =
      "Congratulations! You won 3 rounds. Game restarted.";
  } else {
    resultElement.innerHTML = "Computer won 3 rounds! Game restarted.";
  }

  // Reset the scores and display
  userScore = 0;
  computerScore = 0;
  userScoreElement.textContent = "0";
  computerScoreElement.textContent = "0";
}

// Function to explain the game
function explainGame() {
  console.log("Explaining the game");

  // Toggle the visibility of the explanation element
  explainElement.style.display = explainElement.style.display === "none" ? "block" : "none";

  // If the explanation is visible, update its content
  if (explainElement.style.display !== "none") {
    explainElement.innerHTML =
      "Welcome to Rock Paper Scissors Lizard Spock!<br><br>" +
      "Rules:<br>" +
      "Rock crushes Scissors<br>" +
      "Scissors cuts Paper<br>" +
      "Paper covers Rock<br>" +
      "Rock crushes Lizard<br>" +
      "Lizard poisons Spock<br>" +
      "Spock smashes Scissors<br>" +
      "Scissors decapitates Lizard<br>" +
      "Lizard eats Paper<br>" +
      "Paper disproves Spock<br>" +
      "Spock vaporizes Rock<br><br>" +
      "Click on the buttons to make your choice and try to win 3 rounds against the computer.";
  }
}


// Event listeners for buttons
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", () => {
    userChoice(button.dataset.choice);
  });
});

document.getElementById("explain-button").addEventListener("click", explainGame);

document.addEventListener("click", () => document.getElementById("iframeAudio").play());