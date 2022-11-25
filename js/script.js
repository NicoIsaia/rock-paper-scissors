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

const playerSelection = "scissors";
const computerSelection = getComputersChoice();

console.log(`Player selected ${playerSelection} and computer selected ${computerSelection}`);
console.log(playRound(playerSelection, computerSelection));