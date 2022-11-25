function getComputersChoice () {
    const choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    const choices = ["rock", "paper", "scissors"];
    if (choices.includes(playerSelection)) {
        if (playerSelection === "rock") {
            if (computerSelection === "rock") {
                return "It's a tie!";
            } else if (computerSelection === "paper") {
                return "Player loses!";
            } else {
                return "Player wins!";
            }
        } else if (playerSelection === "paper") {
            if (computerSelection === "rock") {
                return "Player wins!";
            } else if (computerSelection === "paper") {
                return "It's a tie!";
            } else {
                return "Player loses!";
            }
        } else {
            if (computerSelection === "rock") {
                return "Player loses!";
            } else if (computerSelection === "paper") {
                return "Player wins!";
            } else {
                return "It's a tie!";
            }
        }
    } else {
        return "Invalid choice";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let result;
    let playerSelection;
    let correctChoice;
    const choices = ["rock", "paper", "scissors"];
    for (let i = 0; i < 5; i++) {
        do {
            playerSelection = prompt("Plase choose rock, paper or scissors");
            if (playerSelection !== null) {
                playerSelection.toLowerCase();
            }
            correctChoice = choices.includes(playerSelection);
        } while (!correctChoice);
        result = playRound(playerSelection, getComputersChoice());
        console.log(result);
        if (result === "Player wins!") {
            playerScore++;
        } else if (result === "Player loses!") {
            computerScore++;
        }
    }
    console.log(`Player's score is: ${playerScore}\nComputer's score is: ${computerScore}`);
    if (playerScore > computerScore) {
        console.log(`Final winner is PLAYER!`);
    } else if (computerScore > playerScore) {
        console.log("Final winner is COMPUTER!");
    } else {
        console.log("It's a tie!");
    }
}

game();