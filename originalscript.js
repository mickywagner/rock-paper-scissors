<script>
        let computerScore = 0;
        let playerScore = 0;

        function computerPlay() {
            let randomPRS = Math.floor(Math.random() * 3) + 1;
            if (randomPRS == 1) {
                return 'Rock';
            } else if (randomPRS == 2) {
                return 'Scissors';
            } else {
                return 'Paper';
            }
        }

        function playRound(playerSelection, computerSelection) {
            playerSelection = prompt('Paper, rock, scissors?').toLowerCase();
            computerSelection = computerPlay().toLowerCase();

            let regex = /\b(rock|paper|scissors)\b/i;
            if (!regex.test(playerSelection)) {
                alert('That\'s not a valid option. Choose \'paper\', \'rock\' or \'scissors\'.');
                playerSelection = prompt('Paper, rock, scissors?').toLowerCase();
            }
            ''
            // console.log(playerSelection);
            // console.log(computerSelection);

            if (computerSelection === 'rock' && playerSelection === 'scissors') {
                alert("You Lose! Rock beats scissors!");
                computerScore++;
            } else if (computerSelection === 'paper' && playerSelection === 'rock') {
                alert("You Lose! Paper beats rock!");
                computerScore++;
            } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
                alert("You Lose! Scissors beats paper!");
                computerScore++;
            } else if (computerSelection === playerSelection) {
                alert("Draw!");
            } else {
                alert("Yay! You win!");
                playerScore++;
            }

            console.log(playerScore);
            console.log(computerScore);
        }

        function game() {
            playRound();
            playRound();
            playRound();
            playRound();
            playRound();
            if (playerScore > computerScore) {
                alert("Congratulations you beat the computer " + playerScore + " to " + computerScore + "!")
            } else if (computerScore > playerScore) {
                alert("You lost! The computer beat you " + computerScore + " to " + playerScore + ". Better luck next time!")
            } else {
                alert("Looks like it's a draw.")
            }
        }

        const startBtn = document.querySelector('#start')
        startBtn.addEventListener('click', game)




    </script>