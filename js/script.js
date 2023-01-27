function playRound(playerSelection) {
    const choices = ["rock", "paper", "scissors"];
    const computerSelection = choices[Math.floor(Math.random() * 3)];
    if (choices.includes(playerSelection)) {
        if (playerSelection === "rock") {
            if (computerSelection === "rock") {
                return "This round is a tie!";
            } else if (computerSelection === "paper") {
                return "Player loses this round!";
            } else {
                return "Player wins this round!!";
            }
        } else if (playerSelection === "paper") {
            if (computerSelection === "rock") {
                return "Player wins this round!!";
            } else if (computerSelection === "paper") {
                return "This round is a tie!";
            } else {
                return "Player loses this round!";
            }
        } else {
            if (computerSelection === "rock") {
                return "Player loses this round!";
            } else if (computerSelection === "paper") {
                return "Player wins this round!!";
            } else {
                return "This round is a tie!";
            }
        }
    } else {
        return "Invalid choice";
    }
}

const results = document.querySelector('#results');
const score = document.querySelector('#score');

let pscore = 0;
let cscore = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        results.innerText = playRound(button.id);
        if (results.innerText === "Player wins this round!!") {
            pscore += 1;
        } else if (results.innerText === "Player loses this round!") {
            cscore +=1;
        }
        score.innerText = `Player score is: ${pscore} \nComputer score is: ${cscore}`;
        if (pscore === 5) {
            score.innerText = "PLAYER WINS!";
            pscore = 0;
            cscore = 0;
        } else if (cscore === 5) {
            score.innerText = "COMPUTER WINS!";
            pscore = 0;
            cscore = 0;
        }
    })
});
