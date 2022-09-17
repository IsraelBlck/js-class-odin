// store game items []
let gameCards = [
    'Rock',
    'Paper',
    'Scissors'
]

// Get computer choice randomly

function getComputerChoice() {
    return gameCards[Math.floor(Math.random() * gameCards.length)]   
}
console.log(getComputerChoice()); 

