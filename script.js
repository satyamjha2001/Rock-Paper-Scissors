const myHand = document.querySelector("#my_hand");
const computersHand = document.querySelector("#computers_hand");
let myScore = document.querySelector("#my_points");
let computersScore = document.querySelector("#computers_points");
let result = document.querySelector(".result");
const resetButton = document.querySelector("#reset");

const choices = ["✊🏻", "✋🏻", "✌🏻"];
let roundsPlayed = 0;

const playGame = (playerChoice) => {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  animateHands();

  setTimeout(() => {
    myHand.innerHTML = playerChoice;
    computersHand.innerHTML = computerChoice;

    const winner = getWinner(playerChoice, computerChoice);
    updateScores(winner);
    result.innerHTML = `Round ${++roundsPlayed}: ${winner}`;
  }, 1000);
};

const animateHands = () => {
  // Set the hands to "fist" before shaking
  myHand.innerHTML = "🤜🏻";
  computersHand.innerHTML = "🤛🏻";

  myHand.classList.add("my-shake-hand");
  computersHand.classList.add("shake-hand");
  setTimeout(() => {
    myHand.classList.remove("my-shake-hand");
    computersHand.classList.remove("shake-hand");
  }, 1000);
};

const getWinner = (player, computer) => {
  if (player === computer) return "It's a tie!";
  if (
    (player === "✊🏻" && computer === "✌🏻") ||
    (player === "✋🏻" && computer === "✊🏻") ||
    (player === "✌🏻" && computer === "✋🏻")
  ) {
    myScore.textContent = +myScore.textContent + 1;
    return "You Won!";
  } else {
    computersScore.textContent = +computersScore.textContent + 1;
    return "Computer Won!";
  }
};

const resetGame = () => {
  myScore.textContent = 0;
  computersScore.textContent = 0;
  roundsPlayed = 0;
  result.textContent = "";
  myHand.innerHTML = "🤜🏻";
  computersHand.innerHTML = "🤛🏻";
};

resetButton.addEventListener("click", resetGame);
document.querySelector("#rock").addEventListener("click", () => playGame("✊🏻"));
document
  .querySelector("#paper")
  .addEventListener("click", () => playGame("✋🏻"));
document
  .querySelector("#scissors")
  .addEventListener("click", () => playGame("✌🏻"));
