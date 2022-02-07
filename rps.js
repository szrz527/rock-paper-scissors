function computerPlay() {
    let computerNumber = Math.floor(Math.random() * 3);
    if (computerNumber == 0) {
        return("Rock");
    }
        else if (computerNumber == 1) {
            return("Paper")
        }
        else return("Scissors");
}
function playRound(playerSelection, computerSelection) {  
    if (playerSelection.toUpperCase() == "ROCK") {
        if (computerSelection == "Paper") {
            return("You lose! Paper beats rock. :(");
        }
        else if (computerSelection == "Scissors") {
            return("You win! Rock beats scissors! :)");
        }
        else return("It's a tie! :|");
    }
    else if (playerSelection.toUpperCase() == "PAPER") {
        if (computerSelection == "Rock") {
            return("You win! Paper beats rock! :)");
        }
        else if (computerSelection == "Scissors") {
            return("You lose! Scissors beats paper. :(");
        }
        else return("It's atie! :|");
    }
    else if (playerSelection.toUpperCase() == "SCISSORS") {
        if (computerSelection == "Rock") {
            return("You lose! Rock beats scissors. :(");
        }
        else if (computerSelection == "Paper") {
            return("You win! Scissors beats paper! :)");
        }
        else return ("It's a tie. :|");
    }
    else return("Choose rock, paper or scissors!");
}
function RPSGame() {
    let playerScore = 0;
    let computerScore = 0;
    while (playerScore < 5 && computerScore < 5) {
        let playerSelection = prompt("Rock, paper or scissors?");
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        switch ((playRound(playerSelection, computerSelection).slice(-1))) {
            case ")":
                playerScore++;
                break;
            case "(":
                computerScore++;
        }
    }
    console.log("Az eredmény: A te pontszámod:" + playerScore + " A gép pontszáma:" + computerScore);

}
RPSGame();
