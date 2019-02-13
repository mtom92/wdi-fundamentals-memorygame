console.log("Up and running!");

var cards = ["queen","queen","king","king"];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[3];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardsInPlay[0]);
console.log("User flipped " + cardsInPlay[1]);

if (cardsInPlay.length == 2){
  if(cardOne === cardTwo){
    alert("You found a match");
  }
  else{
    alert("Sorry try again !");
  }
}
