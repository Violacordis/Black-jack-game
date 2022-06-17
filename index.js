
let cards = [] //array
let sum = 0
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document .getElementById("cards-el");

let player = {
    name :"Ada",
    token: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = `${player.name}: $${player.token}`


//create a function getRandomCard(), that always returns the number 5
function getRandomCard() {     //write in this function format, not as arrow function
   let randomNumber =  Math.floor(Math.random() * 13) + 1 ;
   if (randomNumber > 10) {
       return 10
   } else if (randomNumber === 1) {
       return 11
   } else {
       return randomNumber
   }
}

const startGame = () => {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

const renderGame = () => {

    cardsEl.textContent = `Cards: `
    // creating a for loop
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent +=  cards[i] + " ";
    }

    sumEl.textContent = `Sum: ${sum}`;

    // In this game, a player with a king(10) and ace(11) (21 in total) wins, less 
    // than 21 is still in the game but above 21 loses
    
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got black jack"
        hasBlackJack = true;
    } else {
        message = "You're out of the game"
        isAlive = false;
    }
    
    messageEl.textContent = message;
}

const newCard = () => {

    if (isAlive === true && hasBlackJack === false) {
      // creata a card variable
         let card = getRandomCard();
    // Add new card to the sum variable
        sum += card;
    //push the card to the cards array
        cards.push(card);
    //call start game
     renderGame(); 
    }
    
}
 

//Math.random() generates number blw 0 and 1 (not including 1)
// Math.random * 6 will give 0.000 to 5.9999