let userScore = 0;
let computerScore = 0;

// Function to handle user choice
function userChoice(choice) {
  console.log("User chose:", choice);

  if (userScore < 3 && computerScore < 3) {
    let choices = ["rock", "paper", "scissors", "lizard", "spock"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

    console.log("Computer chose:", computerChoice);

    let result = getResult(choice, computerChoice);

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
    document.getElementById("result").style.color = "white";
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
    document.getElementById("result").style.color = "lightgreen";
    console.log("You win!");
    return "You win!";
  } else {
    computerScore++;
    document.getElementById("result").style.color = "red";
    console.log("You lose!");
    return "You lose!";
  }
}

// Function to display the result
function displayResult(result, computerChoice) {
  console.log("Displaying result:", result, "Computer chose:", computerChoice);

  let resultElement = document.getElementById("result");
  resultElement.innerHTML = `${result} Computer chose ${computerChoice}.`;
  let userScoreElement = document.getElementById("user-score");
  let computerScoreElement = document.getElementById("computer-score");
  userScoreElement.textContent = userScore;
  computerScoreElement.textContent = computerScore;
}

// Function to handle the end of the game
function endGame() {
  console.log("Game over!");

  let resultElement = document.getElementById("result");
  if (userScore === 3) {
    resultElement.innerHTML =
      "Congratulations! You won 3 rounds. Game restarted.";
  } else {
    resultElement.innerHTML = "Computer won 3 rounds! Game restarted.";
  }

  // Reset the scores and display
  userScore = 0;
  computerScore = 0;
  document.getElementById("user-score").textContent = "0";
  document.getElementById("computer-score").textContent = "0";
}

// Function to explain the game
function explainGame() {
  console.log("Explaining the game");

  let resultElement = document.getElementById("explain-game");
  resultElement.innerHTML =
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

// Event listeners for buttons
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", () => {
    userChoice(button.dataset.choice);
  });
});

document
  .getElementById("explain-button")
  .addEventListener("click", explainGame);
