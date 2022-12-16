
function init() {
  // ! Elements
  const hitBtn = document.querySelector('#hit')
  const stickBtn = document.querySelector('#stick')

  // ! Global Variables 
  let dealerScore = 0
  let playerScore = 0
  let dealerCards = []
  let playerCards = []
  let selectedCard = 0
  const deck = []
  let unknown 


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

  //! Events: 
  // * Hit
  function hit() {
    getRandomCard()
    dealPlayer()
    // console.log(playerScore)
  }
  hitBtn.addEventListener("click", hit);

  // * Stick
  function stick() {
    hitBtn.disabled = true;
    stickBtn.disabled = true;
    //display player score
    console.log("player pressed stick")
    if (dealerScore < 17){
      dealDealer()
    } // else remove unknown card and display from of card and dealer score. 
    }
    stickBtn.addEventListener("click", stick);

  // ? Dealing
  //! Player
  function dealPlayer(){
    getRandomCard()
    let num = selectedCard.split('')
    let score
    if (num[0] == "A"){
      if (dealerScore > 21){
        score = 1
      } else{
        score = 11
      }
    }else if (isNaN(num[0]) || num[0] == '1'){
      score = 10
    }else{ score = Number(num[0])}

    playerScore += score
    playerCards.push(selectedCard)
    if (playerScore > 21){
      hitBtn.disabled = true;
      setTimeout(()=> alert('BUST! Dealer has won this time.'), 800)
    }
    if (playerScore == 21){
      setTimeout(()=> alert('you got 21!! Congratulations you beat the dealer'), 800)
    }

    // add card images to html dynamically
    let cardImg = document.createElement("img")
    console.log(cardImg)
    cardImg.src = `./images/${selectedCard}.png`
    document.getElementById("player-cards").appendChild(cardImg)
  }
  
  //! Dealer
  function dealDealer(){
    getRandomCard()
    let num = selectedCard.split('')
    let score
    if(isNaN(num[0]) || num[0] == '1'){
      if (num[0] == "A"){
        if (dealerScore > 21){
          score = 1
        } else{
          score = 11
        }
      } else {
        score = 10
      }
    }else{
      score = Number(num[0])
    }
    dealerScore += score
    dealerCards.push(selectedCard)
    unknown = dealerCards[0]
    console.log('unknown-> ',unknown)

    // for(let i = 1; i < dealerCards.length; i++){
      let cardImg = document.createElement("img")
      console.log(cardImg)
      cardImg.src = `./images/${selectedCard}.png`
      document.getElementById("dealer-cards").append(cardImg)
    // }
  }

  // ! Start Game
  function startGame(){
    for( let i = 0; i < 2; i++){
      dealDealer()
      dealPlayer()
    }
  }
  startGame()

  //! Random Card Generator
  function getRandomCard(){
    let randomCard =  Math.floor(Math.random() * deck.length)
    selectedCard = deck[randomCard]
    deck.splice(randomCard, 1)
  }
  getRandomCard()

  // * Dealer Hit
  // * Dealer Stick

  // ! End Game

}
init()

  // if player score it 21  - remove buttons, and displayer winner. 
  // if player score is > 21 && theres an A -> -10 from score. 
  // on page load  - click deal button to begin 
  // need function for hit 
  // function for stick 
  // for loop - with i = 0; i <