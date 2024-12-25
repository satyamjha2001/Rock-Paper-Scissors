// DOM Elements
const myHand = document.querySelector("#my_hand");
const computersHand = document.querySelector("#computers_hand");
const myScore = document.querySelector("#my_points");
const computersScore = document.querySelector("#computers_points");
const result = document.querySelector(".result");
const resetButton = document.querySelector("#reset");

// Choices and state
const choices = ["✊🏻", "✋🏻", "✌🏻"];
let roundsPlayed = 0;

// Play the game when a choice is clicked
const playGame = (playerChoice) => {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  animateHands();

  // Delay to show the result after animation
  setTimeout(() => {
    // Update hands with player and computer choices
    myHand.innerHTML = playerChoice;
    computersHand.innerHTML = computerChoice;

    // Get and display the winner
    const winner = getWinner(playerChoice, computerChoice);
    displayResult(winner);
    updateScores(winner);
  }, 1000); // Match the animation duration
};

// Animate hands before showing the result
const animateHands = () => {
  myHand.innerHTML = "🤜🏻";
  computersHand.innerHTML = "🤛🏻";

  myHand.classList.add("my-shake-hand");
  computersHand.classList.add("shake-hand");

  setTimeout(() => {
    myHand.classList.remove("my-shake-hand");
    computersHand.classList.remove("shake-hand");
  }, 1000); // Match animation duration
};

// Determine the winner
const getWinner = (player, computer) => {
  if (player === computer) return "It's a tie!";
  if (
    (player === "✊🏻" && computer === "✌🏻") ||
    (player === "✋🏻" && computer === "✊🏻") ||
    (player === "✌🏻" && computer === "✋🏻")
  ) {
    return "You Won!";
  } else {
    return "Computer Won!";
  }
};

// Display the result and update round number
const displayResult = (winner) => {
  roundsPlayed++;
  result.textContent = `Round ${roundsPlayed}: ${winner}`;
};

// Update scores based on the winner
const updateScores = (winner) => {
  if (winner === "You Won!") {
    myScore.textContent = parseInt(myScore.textContent) + 1;
  } else if (winner === "Computer Won!") {
    computersScore.textContent = parseInt(computersScore.textContent) + 1;
  }
};

// Reset the game to its initial state
const resetGame = () => {
  myScore.textContent = 0;
  computersScore.textContent = 0;
  roundsPlayed = 0;
  result.textContent = "";
  myHand.innerHTML = "🤜🏻";
  computersHand.innerHTML = "🤛🏻";
};

// Event listeners for buttons
resetButton.addEventListener("click", resetGame);
document.querySelector("#rock").addEventListener("click", () => playGame("✊🏻"));
document
  .querySelector("#paper")
  .addEventListener("click", () => playGame("✋🏻"));
document
  .querySelector("#scissors")
  .addEventListener("click", () => playGame("✌🏻"));
