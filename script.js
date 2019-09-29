let computerScore = 0;
let playerScore = 0;
let compScoreCount = document.querySelector("#compScore");
let playScoreCount = document.querySelector("#playerScore");

function computerPlay() {
  removeBorder();
  let randomPRS = Math.floor(Math.random() * 3) + 1;
  if (randomPRS == 1) {
    return "rock";
  } else if (randomPRS == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function removeBorder() {
  const compList = document.querySelectorAll(".comp");
  compList.forEach(li => li.classList.remove("border"));
}

const buttons = document.querySelectorAll(".choice");
buttons.forEach(button =>
  button.addEventListener("click", function(e) {
    let playerSelection = e.target.closest("button").id;

    let computerSelection = computerPlay();
    let rockBorder = document.querySelector("#compR");
    let paperBorder = document.querySelector("#compP");
    let scissorsBorder = document.querySelector("#compS");

    if (computerSelection === "rock") {
      rockBorder.classList.add("border");
    } else if (computerSelection === "paper") {
      paperBorder.classList.add("border");
    } else {
      scissorsBorder.classList.add("border");
    }

    if (computerSelection === "rock" && playerSelection === "scissors") {
      computerScore++;
    } else if (computerSelection === "paper" && playerSelection === "rock") {
      computerScore++;
    } else if (
      computerSelection === "scissors" &&
      playerSelection === "paper"
    ) {
      computerScore++;
    } else if (computerSelection === playerSelection) {
    } else {
      playerScore++;
    }

    playScoreCount.textContent = "Player Score: " + playerScore;
    compScoreCount.textContent = "Computer Score: " + computerScore;

    checkScore();
  })
);

function checkScore() {
  if (playerScore < 5 && computerScore < 5) {
    return;
  } else if (playerScore === 5) {
    alert(
      "You win! You beat the computer " +
        playerScore +
        " to " +
        computerScore +
        "!"
    );
    resetGame();
  } else {
    alert(
      "You lost! The computer beat you " +
        computerScore +
        " to " +
        playerScore +
        ". Better luck next time!"
    );
    resetGame();
  }
}

function resetGame() {
  removeBorder();
  computerScore = 0;
  playerScore = 0;
  compScoreCount.textContent = "Computer Score: " + computerScore;
  playScoreCount.textContent = "Player Score: " + playerScore;
}

const startBtn = document.querySelector("#start");
startBtn.addEventListener("click", resetGame);
