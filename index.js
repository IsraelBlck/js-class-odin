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



// Get player choice  and case insensitive
function getPlayerChoice() {
    let input = prompt('Rock Paper or Scissors')
    if( input === null || input === undefined) {
         return prompt('Please select choice correctly')
    }
    input = input.toLowerCase()
    console.log(input)
}

// Validate player choice
function validatePlaye(choice){
    if(gameCards(includes(choice))){
        return true
    }else {
        return false
    }
}
console.log(getPlayerChoice());