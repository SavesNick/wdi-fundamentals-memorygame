console.log("Up and running!");

alert("Hello, friends.");

//cards array
let cards = [{
rank:"queen",
suit:"hearts",
cardImg:"images/queen-of-hearts.png"
},
{
  rank:"queen",
  suit:"diamonds",
  cardImg:"images/queen-of-diamonds.png"
  },{
    rank:"king",
    suit:"hearts",
    cardImg:"images/king-of-hearts.png"
    },{
      rank:"king",
      suit:"diamonds",
      cardImg:"images/king-of-diamonds.png"
      }
];
//empty array
let cardsInPlay = [];
function flipCard(cardId) {
  console.log("User flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].suit)
  console.log(cards[cardId].cardImg)
}
flipCard(0);
flipCard(2);
function checkForMatch() {
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
    } else {
      alert("Sorry, try again.");
    }
  }
}
checkForMatch()
