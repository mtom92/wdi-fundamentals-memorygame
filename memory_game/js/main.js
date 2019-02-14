console.log("Up and running!");

var cards = [{rank:"queen",suit :"hearts", cardImg : "images/queen-of-hearts.png" },
             {rank:"queen",suit :"diamonds", cardImg : "images/queen-of-diamonds.png" },
             {rank:"king",suit :"hearts", cardImg : "images/king-of-hearts.png" },
             {rank:"king",suit :"diamonds", cardImg : "images/king-of-diamonds.png" }];

var cardsInPlay = [];

var cardOne = cards[0];
var cardTwo = cards[3];

function flipCard(cardId){
  console.log("User flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].suit);
  console.log(cards[cardId].cardImg);
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
