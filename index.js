

// store game items [] and winner 
let gameCards = ["rock", "paper", "scissors"];
let winners = [];

// play game function
document.getElementById("btn").onclick = game => {
    for(let i = 1; i <=5; i++){
      playRound(i)
    }
    logWins()
};


// Play single round function

function playRound(round) {
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  const winner = getWinner(playerSelection, computerSelection);
  winners.push(winner)
  showRound(playerSelection,computerSelection,winner,round)
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

// Show winner
function logWins() {
  let playerWins = winners.filter((item) => item == 'Player').length;
  let computerWins = winners.filter((item) => item == 'Computer').length;
  let draws = winners.filter((item) => item == 'Tie').length;

  console.log('Result:')
  console.log('Player: ', playerWins);
  console.log('Computer: ', computerWins);
  console.log('Draw: ', draws)
}

//Show round winner and result

function showRound(playerChoice, computerChoice, winner, round) {
  console.log('Round:', round)
  console.log('Player chose:', playerChoice)
  console.log('Computer chose:', computerChoice)
  console.log('Won the round:',winner )
  console.log('-----------------------------');
}


