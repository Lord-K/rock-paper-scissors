function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    let rand = Math.floor(Math.random() * options.length);
    let pcChoice = options[rand];
    return pcChoice;
      
}


function playRound(playerSelection, computerSelection) {
if(playerSelection === computerSelection) {
    return 'It is a draw!';
} else if(playerSelection == 'paper' && computerSelection == 'rock') {
    return 'You win!';
} else if(playerSelection == 'paper' && computerSelection =='scissors') {
    return 'The computer wins!';
} else if(playerSelection == 'rock' && computerSelection == 'scissors') {
    return 'You win';
} else if(playerSelection =='rock' && computerSelection == 'paper') {
    return 'The computer wins!';
} else if(playerSelection == 'scissors' && computerSelection == 'paper') {
    return 'You win!';
} else if(playerSelection == 'scissors' && computerSelection == 'rock') {
    return 'The computer wins!';
}
}

let playerSelection = prompt('Rock, Paper or Scissors').toLowerCase();
let computerSelection = getComputerChoice();

function gameOn() {
    for(let i = 0; i < 5; i++) {
    playRound([i]);

    };
}
gameOn();
    
document.write(playRound(playerSelection, computerSelection));