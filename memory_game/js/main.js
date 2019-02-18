console.log("Up and running!");

var cards = [{rank:"queen",suit :"hearts", cardImg : "images/queen-of-hearts.png" },
             {rank:"queen",suit :"diamonds", cardImg : "images/queen-of-diamonds.png" },
             {rank:"king",suit :"hearts", cardImg : "images/king-of-hearts.png" },
             {rank:"king",suit :"diamonds", cardImg : "images/king-of-diamonds.png" }];

var cardsInPlay = [];
var cardsInPlayId = [];
var cardsPlayed = [];
var messagesPlaying = document.getElementsByClassName('messages')[0];


function createBoard(){
 var tableExist = document.getElementsByTagName('img')[0];
 if (typeof(tableExist) === 'undefined')
{
  for(var i=0 ; i < cards.length; i++){
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src',"images/back.png");
    cardElement.setAttribute('data-id',i);
    cardElement.addEventListener('click',flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}
 messagesPlaying.textContent = "Pick a card";
}


function resetBoard(){
  for(var i=0; i < cards.length ; i++){
    document.getElementsByTagName('img')[i].setAttribute('src',"images/back.png");
  }
  cardsInPlay = [];
  cardsPlayed = [];
  messagesPlaying.textContent = "Pick a card";
}


function flipCard(){
  var cardId = this.getAttribute('data-id');
  console.log("User flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  cardsInPlayId.push(this);
  console.log(cards[cardId].suit);
  console.log(cards[cardId].cardImg);
  this.setAttribute('src',cards[cardId].cardImg);
  checkForMatch();
}

function notaMatch(){
  console.log(cardsInPlayId);
  for(var l=0; l<cardsInPlay.length;l++){
    cardsInPlayId[l].setAttribute('src',"images/back.png");
  }
  cardsInPlay = [];
  cardsInPlayId = [];
  createBoard();
}

function checkForMatch(){
  if (cardsInPlay.length == 2){
    if(cardsInPlay[0] === cardsInPlay[1]){
      messagesPlaying.textContent = "You found a match";
      cardsPlayed = cardsPlayed.concat(cardsInPlay);
      cardsInPlay = [];
      cardsInPlayId = [];
      if(cardsPlayed.length === cards.length){
        messagesPlaying.textContent = "You are a winner";
        setTimeout(final, 3000);
      }
      else{
        setTimeout(createBoard, 3000);
      }

    }
    else {
      messagesPlaying.textContent = "Sorry !! not a match!";
      setTimeout(notaMatch, 2000);
    }
  }
}

function final(){
  messagesPlaying.textContent = "Please press reset";
}


var buttonStart = document.getElementsByName('start')[0];
buttonStart.addEventListener('click',createBoard);

var resetButton = document.getElementsByName('reset')[0];
resetButton.addEventListener('click',resetBoard);
