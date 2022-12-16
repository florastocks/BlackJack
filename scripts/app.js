function init() {
  // ! Global Variables 
  let dealerScore = 0
  let playerScore = 0
  let dealerCards = []
  let playerCards = []
  let selectedCard = 0
  const deck = []
  let hit = true 

  // ! Functions:
  // * Create Deck
  function createDeck() {
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
    const suits = ['C', 'H', 'D', 'S']

    for (let i = 0; i < values.length; i++){
      for (let j = 0; j < suits.length; j++) {
        deck.push(values[i]+suits[j])
      }
    }
  }
createDeck()
  // var for values and suits 
  // loop through both vars and join then, and then append to deck array (by joining them they match names of each card image)

  //! Events: 
  // * Hit
  // * Stick
  
  // ! Start Game
  function getRandomCard(){
    let randomCard =  Math.floor(Math.random() * deck.length)
    selectedCard = deck[randomCard]
    deck.splice(randomCard, 1)
  }
  getRandomCard()

  // * Dealing
  function dealPlayer(){
    let num = selectedCard.split('')
    let score
    if (num[0] == "A"){
      score = 11
    }else if (isNaN(num[0]) || num[0] == '1'){
      score = 10
    }else{
      score = Number(num[0])
    }
    playerScore += score
    playerCards.push(selectedCard)
  }
  dealPlayer(selectedCard)
  getRandomCard()
  dealPlayer(selectedCard)
  console.log('players array',playerCards)

  getRandomCard()
  function dealDealer(){
    dealerCards.push(selectedCard)
  }
  dealDealer(selectedCard)
  getRandomCard()
  dealDealer(selectedCard)
  console.log('Dealers array', dealerCards)

  //! Get Card Total
  // * Dealer Hit
  // * Dealer Stick

  // ! End Game

}
init()


  // everytime a random value form the deck is chosen, append it to the player cards array and pop it from the deck array
  // if player sum is larger than 21 - hide hit and sticks button, and display bust 
  // if player score it 21  - remove buttons, and displayer winner. 
  // if player score is < 21 - can hit = true 
  // if player score is > 21 && theres an A -> -10 from score. 
  // on page load  - click deal button to begin 
  // need function for hit 
  // function for stick 
  // for loop - with i = 0; i <