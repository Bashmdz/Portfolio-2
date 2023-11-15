// Function to handle user choice
function userChoice() {

}

// Function to get the result of the game
function getResult() {

}

// Function to display the result
function displayResult() {

}

// Function to handle the end of the game
function endGame() {

}

// Function to explain the game
function explainGame() {

}

// Event listeners for buttons
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", () => {
    userChoice(button.dataset.choice);
  });
});

document.getElementById("explain-button")
document.addEventListener("click", explainGame);
