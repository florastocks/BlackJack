
function init() {
  // ! Elements
  const hitBtn = document.querySelector('#hit')
  const stickBtn = document.querySelector('#stick')
  const dScoreDisplay = document.querySelector('#dealer-score')
  const pScoreDisplay = document.querySelector('#player-score')

  // ! Global Variables 
  let dealerScore = 0
  let playerScore = 0
  let dealerCards = []
  let playerCards = []
  let selectedCard = 0
  let pAceCount = 0
  let dAceCount = 0
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

  //! Events: ----------------------------------------------------------------
  // * Hit
  function hit() {
    getRandomCard()
    dealPlayer()
  }
  hitBtn.addEventListener("click", hit);

  // * Stick
  function stick() {
    hitBtn.disabled = true;
    stickBtn.disabled = true;
    console.log("player pressed stick")
    if (dealerScore < 17){

      dealDealer()
    } // else remove unknown card and display from of card and dealer score. 
    }
    stickBtn.addEventListener("click", stick);

  // ? Dealing
  //! Player
  //* --------------------------------- need to fix the ace --------------------------------------------

  function dealPlayer(){
    getRandomCard()
    playerCards.push(selectedCard)
    playerScore += getScore(selectedCard)
    pScoreDisplay.innerHTML = playerScore
    if (playerScore > 21 && pAceCount > 0 ){
      playerScore -= 10
      pAceCount -= 1
    }
    console.log(playerScore)
    // add card images to html dynamically
    let cardImg = document.createElement("img")
    cardImg.src = `./images/${selectedCard}.png`
    document.getElementById("player-cards").appendChild(cardImg)

    if (playerScore === 21){
      setTimeout(()=> alert('you got 21!! Congratulations you beat the dealer'), 800)
      hitBtn.disabled = true;
      stickBtn.disabled = true;
    }else if (playerScore > 21 ){
      hitBtn.disabled = true;
      stickBtn.disabled = true;
      setTimeout(()=> alert('BUST! Dealer has won this time.'), 800)
    }
  
  }

  function getScore(){
    let num = selectedCard.split('')
    if (isNaN(num[0]) || num[0] === '1'){
      if (num[0] === "A"){
      pAceCount += 1
        return 11
      }
      return 10
    }else{ 
      return Number(num[0])
    }
  }
  
  function getDealerScore(){
    let num = selectedCard.split('')
    if (isNaN(num[0]) || num[0] === '1'){
      if (num[0] === "A"){
      dAceCount += 1
        return 11
      }
      return 10
    }else{ 
      return Number(num[0])
    }
  }

  // //! ------------------------- Dealer --------------------------

  function dealDealer(){
    getRandomCard()
    dealerCards.push(selectedCard)
    dealerScore += getDealerScore(selectedCard)
    unknown = dealerCards[0]
    dScoreDisplay.innerHTML = dealerScore
    if (dealerScore > 21 && dAceCount > 0 ){
      dealerScore -= 10
      dAceCount -= 1
    }

    for(let i = 1; i < dealerCards.length; i++){
      let cardImg = document.createElement("img")
      cardImg.src = `./images/${selectedCard}.png`
      document.getElementById("dealer-cards").append(cardImg)
    }
  }

  // ! Start Game
  function startGame(){
    createDeck()
    for( let i = 0; i < 2; i++){
      dealDealer()
      dealPlayer()
    }
  }
  startGame()

  // ! Random Card Generator
  function getRandomCard(){
    let randomCard =  Math.floor(Math.random() * deck.length)
    selectedCard = deck[randomCard]
    deck.splice(randomCard, 1)
  }
  getRandomCard()

  // ! End Game

}
init()
  // on page load  - click deal button to begin 
  // when player presses stick, remove the hidden card and show the real card 
  // when dealer gets random card, if dealer cards length is 0, random card gets appended to the hidden card 
  // need to show scores. 
