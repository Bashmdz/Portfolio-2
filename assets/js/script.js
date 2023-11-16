// Declare constants for scores
const userScoreElement = document.getElementById("user-score"); /** Reference to the user score element in the DOM */
const computerScoreElement = document.getElementById("computer-score"); /** Reference to the computer score element in the DOM */
const resultElement = document.getElementById("result"); /** Reference to the result element in the DOM */
const explainElement = document.getElementById("explain-game"); /** Reference to the explanation element in the DOM */

// Initialize scores
let userScore = 0; /** Variable to store the user's score */
let computerScore = 0; /** Variable to store the computer's score */

// Function to handle user choice
function userChoice(choice) {
  /** Check if the game is still ongoing (neither player has reached 3 wins) */
  if (userScore < 3 && computerScore < 3) {
    /** Define the possible choices in the game */
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];

    /** Generate a random computer choice */
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    /** Get the result of the current round */
    const result = getResult(choice, computerChoice);

    /** Display the result to the user */
    displayResult(result, computerChoice);
  }

  /** Check if either player has won three rounds */
  if (userScore === 3 || computerScore === 3) {
    /** End the game */
    endGame();
  }
}

// Function to get the result of the game
function getResult(user, computer) {
  /** Check if the user and computer choices are the same (tie) */
  if (user === computer) {
    resultElement.style.color = "white"; /** Set the result text color to white */
    return "It's a tie!"; /** Return a tie message */
  }

  /** Check if the user wins based on the rules of the game */
  if (
    (user === "rock" && (computer === "scissors" || computer === "lizard")) ||
    (user === "paper" && (computer === "rock" || computer === "spock")) ||
    (user === "scissors" && (computer === "paper" || computer === "lizard")) ||
    (user === "lizard" && (computer === "spock" || computer === "paper")) ||
    (user === "spock" && (computer === "scissors" || computer === "rock"))
  ) {
    userScore++; /** Increment the user's score */
    resultElement.style.color = "lightgreen"; /** Set the result text color to light green */
    return "You win!"; /** Return a win message */
  } else {
    /** The computer wins */
    computerScore++; /** Increment the computer's score */
    resultElement.style.color = "red"; /** Set the result text color to red */
    return "You lose!"; /** Return a lose message */
  }
}

// Function to display the result
function displayResult(result, computerChoice) {
  /** Update the result element with the outcome of the round */
  resultElement.innerHTML = `${result} Computer chose ${computerChoice}.`;
  userScoreElement.textContent = userScore; /** Update the user's score in the DOM */
  computerScoreElement.textContent = computerScore; /** Update the computer's score in the DOM */
}

// Function to handle the end of the game
function endGame() {
  /** Display a message indicating the winner and restart the game */
  if (userScore === 3) {
    resultElement.innerHTML =
      "Congratulations! You won 3 rounds. Game restarted.";
  } else {
    resultElement.innerHTML = "Computer won 3 rounds! Game restarted.";
  }

  /** Reset the scores and update the display */
  userScore = 0;
  computerScore = 0;
  userScoreElement.textContent = "0";
  computerScoreElement.textContent = "0";
}

// Function to explain the game
function explainGame() {
  // Toggle the visibility of the explanation element
  explainElement.style.display = explainElement.style.display === "block" ? "none" : "block";

  // If the explanation is visible, update its content
  if (explainElement.style.display === "block") {
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
  /** Add a click event listener to each game button */
  button.addEventListener("click", () => {
    userChoice(button.dataset.choice);
  });
});

// Event listener for the explain-button
document.getElementById("explain-button").addEventListener("click", explainGame);