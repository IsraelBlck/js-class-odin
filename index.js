// store game items []
let gameCards = ["rock", "paper", "scissors"];

// play game function

function game() {
      playRound();
}
// Play single round function

function playRound() {
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
}

// Get player choice  and case insensitive

function getPlayerChoice() {
  input = prompt("Play PAPER, ROCK or SCISSORS");
  while (input == null) {
    input = prompt("Enter your choice - Paper, Rock or Scissors");
  }
  input = input.toLowerCase();
  //  check = validatePlayer(input);
  let check = validatePlayer(input);
  while (check == false) {
    input = prompt(
      "Enter your choice - Paper, Rock or Scissors caps doesn't matter"
    );
    while (input == null) {
      input = prompt("Enter your choice - Paper, Rock or Scissors");
    }
    input = input.toLowerCase();
    check = validatePlayer(input);
  }
  console.log(input);
}
  
// Get computer choice randomly
 function getComputerChoice() {
      return gameCards[Math.floor(Math.random() * gameCards.length)];
 }
 console.log(getComputerChoice());

// Validate player choice
function validatePlayer(choice) {
  return gameCards.includes(choice);
}


game()