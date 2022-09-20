// store game items []
let gameCards = ["rock", "paper", "scissors"];

// play game function
function game() {
    playRound()
}
// Play single round function

function playRound() {
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  const winner = getWinner(playerSelection, computerSelection);
  console.log(winner)
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
  return input;
}

// Get computer choice randomly
 function getComputerChoice() {
      return gameCards[Math.floor(Math.random() * gameCards.length)];
 };

// Validate player choice
function validatePlayer(choice) {
  return gameCards.includes(choice);
}

// get the winner 
function getWinner(playerC, computerC){
  if(playerC === computerC){
    return 'Tie'
  }else if (
    (playerC === "rock" && computerC == "scissors") ||
    (playerC === "paper" && computerC == "rock") ||
    (playerC === "scissors" && computerC == "paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

game()

