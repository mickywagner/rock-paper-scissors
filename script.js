let computerScore = 0;
let playerScore = 0;
let compScoreCount = document.querySelector('#compScore');
let playScoreCount = document.querySelector('#playerScore')

function computerPlay() {
    let randomPRS = Math.floor(Math.random() * 3) + 1;
    if (randomPRS == 1) {
        return 'rock';
    } else if (randomPRS == 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}


// Try start game with button click
// const buttons = document.querySelectorAll('.choice');
// buttons.addEventListener('click', playRound)

function playRound(playerSelection, computerSelection) {
    let rockBorder = document.querySelector('#compR')
    let paperBorder = document.querySelector('#compP')
    let scissorsBorder = document.querySelector('#compS')

    let buttons = document.querySelectorAll('.choice');
    buttons.forEach(button => button.addEventListener('click', function (e) {
        playerSelection = e.target.id 
        computerSelection = computerPlay()
        
        if(computerSelection === 'rock'){
            rockBorder.classList.add('border')
        } else if(computerSelection === 'paper') {
            paperBorder.classList.add('border')
        } else {
            scissorsBorder.classList.add('border')
        }

        if (computerSelection === 'rock' && playerSelection === 'scissors') {
            computerScore++;
        } else if (computerSelection === 'paper' && playerSelection === 'rock') {
            computerScore++;
        } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
            computerScore++;
        } else if (computerSelection === playerSelection) {
        } else {
            playerScore++;
        }

        playScoreCount.textContent = "Player Score: " + playerScore
        compScoreCount.textContent = "Computer Score: " + computerScore

        if (playerScore === 5) {
            alert("You win! You beat the computer " + playerScore + " to " + computerScore + "!")
            resetGame()
        } else if(computerScore === 5) {
            alert("You lost! The computer beat you " + computerScore + " to " + playerScore + ". Better luck next time!")
            resetGame()
        }
    }))
}

function resetGame() {
    computerScore = 0;
    playerScore = 0;
    compScoreCount.textContent = "Computer Score: " + computerScore
    playScoreCount.textContent = "Player Score: " + playerScore
    playRound()
}

const startBtn = document.querySelector('#start')
startBtn.addEventListener('click', resetGame)

playRound()
