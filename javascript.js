const options = ['rock', 'paper', 'scissors']


function getComputerChoice() {
    let rand = Math.floor(Math.random() * options.length);
    let pcChoice = options[rand];
    return pcChoice;

}

function yourChoice() {
    let choice = prompt('type rock, paper or scissors').toLowerCase();
    while(!(choice == 'paper' || choice == 'rock' || choice == 
'scissors')) {
        choice = prompt('type rock, paper or scissors');
    }
    return choice;
}

    
function playRound() {
    let playerSelection = yourChoice();
    let computerSelection = getComputerChoice();
    if(playerSelection === computerSelection) {
        return 'It is a draw!';
    } else if(playerSelection == 'paper' && computerSelection == 'rock' ||
    playerSelection == 'rock' && computerSelection == 'scissors' ||
    playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'You win!';
    } else {
        return 'Computer wins'
    }
    }


function gameOn() {
    for(let i = 1; i < 6; i++) {
     console.log(`Round ${i}` + " " + playRound(i));

    };
}


