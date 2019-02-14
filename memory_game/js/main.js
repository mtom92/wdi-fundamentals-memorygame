console.log("Up and running!");

var cards = ["queen","queen","king","king"];
var cardsInPlay = [];

var cardOne = cards[0];
var cardTwo = cards[3];

function flipCard(cardId){
  console.log("User flipped " + cards[cardId]);
  cardsInPlay.push(cards[cardId]);
}

function checkForMatch(){

  if (cardsInPlay.length == 2){
    if(cardsInPlay[0] === cardsInPlay[1]){
      alert("You found a match");
    }
    else{
      alert("Sorry try again !");
    }
  }

}

flipCard(0);
flipCard(1);

checkForMatch();
