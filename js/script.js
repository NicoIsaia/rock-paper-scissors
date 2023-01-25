function playRound(playerSelection) {
    const choices = ["rock", "paper", "scissors"];
    const computerSelection = choices[Math.floor(Math.random() * 3)];
    console.log("computer chooses " + computerSelection);
    if (choices.includes(playerSelection)) {
        if (playerSelection === "rock") {
            if (computerSelection === "rock") {
                console.log( "It's a tie!");
            } else if (computerSelection === "paper") {
                console.log( "Player loses!");
            } else {
                console.log( "Player wins!");
            }
        } else if (playerSelection === "paper") {
            if (computerSelection === "rock") {
                console.log( "Player wins!");
            } else if (computerSelection === "paper") {
                console.log( "It's a tie!");
            } else {
                console.log( "Player loses!");
            }
        } else {
            if (computerSelection === "rock") {
                console.log( "Player loses!");
            } else if (computerSelection === "paper") {
                console.log( "Player wins!");
            } else {
                console.log("It's a tie!");
            }
        }
    } else {
        console.log("Invalid choice");
    }
}

const buttons = document.querySelectorAll('button');
console.log(buttons);
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.id);
        playRound(button.id);
    })
});
