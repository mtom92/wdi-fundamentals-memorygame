console.log("Up and running!");

var cards = [{rank:"queen",suit :"hearts", cardImg : "images/queen-of-hearts.png" },
             {rank:"queen",suit :"diamonds", cardImg : "images/queen-of-diamonds.png" },
             {rank:"king",suit :"hearts", cardImg : "images/king-of-hearts.png" },
             {rank:"king",suit :"diamonds", cardImg : "images/king-of-diamonds.png" }];

var cardsInPlay = [];


function createBoard(){
  for(var i=0 ; i < cards.length; i++){
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src',"images/back.png");
    cardElement.setAttribute('data-id',i);
    cardElement.addEventListener('click',flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}


function flipCard(){
  var cardId = this.getAttribute('data-id');
  console.log("User flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].suit);
  console.log(cards[cardId].cardImg);
  this.setAttribute('src',cards[cardId].cardImg);
  checkForMatch();
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

createBoard();
