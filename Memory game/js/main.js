console.log("Up and running!");

//console.log("User flipped " + cardThree);
alert('Hello, friends.');

//cards array
let cards = ["queen", "king", "queen", "king"]
let cardsInPlay = [ ]
let cardOne = cards[0]
let cardTwo = cards[1]
cardsInPlay.push(cardOne)
cardsInPlay.push(cardTwo)
console.log("User flipped " + cardsInPlay[0]);
console.log("User flipped " + cardsInPlay[1]);
if(cardsInPlay.length===2){
if(cardsInPlay[0]===cardsInPlay[1]){alert("You found a match!");}else{alert("Sorry, try again.");}
}