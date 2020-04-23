console.log("Up and running!");

alert("Hello, friends.");

//cards array
let cards = ["queen", "king", "queen", "king"];
//empty array
let cardsInPlay = [];
function flipCard(cardId) {
  console.log("User flipped " + cards[cardId]);
  cardsInPlay.push(cards[cardId]);
}
flipCard(0);
flipCard(1);
function checkForMatch() {
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
    } else {
      console.log("Sorry, try again.");
    }
  }
}
checkForMatch()