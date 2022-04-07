let playerScore  = 0;
let computerScore = 0;

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
            computerScore++;
            return("Ezt a kört elvesztetted! A papír üti a követ. :(");
        }
        else if (computerSelection == "Scissors") {
            playerScore++;
            return("Nyertél ebben a körben! A kő üti az ollót. :)");
        }
        else return("Döntetlen! :|");
    }
    else if (playerSelection.toUpperCase() == "PAPER") {
        if (computerSelection == "Rock") {
            playerScore++;
            return("Nyertél ebben a körben! A papír üti a követ! :)");
        }
        else if (computerSelection == "Scissors") {
            computerScore++;
            return("Ezt a kört elvesztetted! Az olló üti a papírt. :(");
        }
        else return("Döntetlen! :|");
    }       
    else if (playerSelection.toUpperCase() == "SCISSORS") {
        if (computerSelection == "Rock") {
            computerScore++;
            return("Ezt a kört elvesztetted! A kő üti az ollót. :(");
        }
        else if (computerSelection == "Paper") {
            playerScore++;
            return("Nyertél ebben a körben! Az olló üti a papírt. :)");
        }
        else return ("Döntetlen! :|");
    }
    else if (playerSelection.toUpperCase() == "RESET") {
        playerScore = 0;
        computerScore = 0;
    }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let computerSelection = computerPlay();
        if (playerScore < 5 && computerScore < 5) {
            aktualisJatekKiir.textContent = playRound(button.id, computerSelection);
        }
        if (playerScore == 5) {
            aktualisJatekKiir.textContent = "Győztél! Az eredmény: " + playerScore + " - " + computerScore + ".";
            playerScore = 0;
            computerScore = 0;
        }
        else if (computerScore == 5) {
            aktualisJatekKiir.textContent = "Vesztettél! Az eredmény: " + playerScore + " - " + computerScore + ".";
            playerScore = 0;
            computerScore = 0;
        }
        jatekosEredmenyKiir.textContent = "Játékos pontszáma: " + playerScore;
        computerEredmenyKiir.textContent = "Számítógép pontszáma: " + computerScore;
    });
});

const jatekosEredmenyKiir = document.createElement("p");
const computerEredmenyKiir = document.createElement("p");
const aktualisJatekKiir = document.createElement("p");

results.appendChild(aktualisJatekKiir);
results.appendChild(jatekosEredmenyKiir);
results.appendChild(computerEredmenyKiir);