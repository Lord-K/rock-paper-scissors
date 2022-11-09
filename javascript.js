let options = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let rand = Math.floor(Math.random() * options.length);
    let pcChoice = options[rand];
    return pcChoice;

}

function playRound() {
    let playerSelection = prompt('Rock, Paper or Scissors').toLowerCase();
    let computerSelection = getComputerChoice();
if(playerSelection === computerSelection) {
    return 'It is a draw!';
} else if(playerSelection == 'paper' && computerSelection == 'rock') {
    return 'You win!';
} else if(playerSelection == 'paper' && computerSelection =='scissors') {
    return 'Computer wins!';
} else if(playerSelection == 'rock' && computerSelection == 'scissors') {
    return 'You win!';
} else if(playerSelection =='rock' && computerSelection == 'paper') {
    return 'Computer wins!';
} else if(playerSelection == 'scissors' && computerSelection == 'paper') {
    return 'You win!';
} else if(playerSelection == 'scissors' && computerSelection == 'rock') {
    return 'Computer wins!';
}else {
    return 'Not a valid value'
}
}

function log() {
    let pcCount = 0;
    let youCount = 0;


}

function gameOn() {
    for(let i = 1; i < 6; i++) {
     console.log(`Round ${i}` + " " + playRound(i));

    };
}
gameOn();
