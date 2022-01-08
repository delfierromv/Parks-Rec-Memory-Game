// 'use strict';
document.addEventListener('DOMContentLoaded',() =>{
  //Everything will be written in this event listener
  //1. Create array of different cards with two keys (name & image)---we need two of each card to play the game
  let cardArray = [
    {
      name:  'ann',
      img: 'images/gifs/1.gif'
    },
    {
      name: 'ann',
      img: 'images/gifs/1.gif'
    },
    {
      name: 'fartwads',
      img: 'images/gifs/2.gif'
    },
    {
      name: 'fartwads',
      img: 'images/gifs/2.gif'
    },
    {
      name: 'treatYoSelf',
      img: 'images/gifs/3.gif'
    },
    {
      name: 'treatYoSelf',
      img: 'images/gifs/3.gif'
    },
    {
      name: 'jerks',
      img: 'images/gifs/4.gif'
    },
    {
      name: 'jerks',
      img: 'images/gifs/4.gif'
    },
    {
      name: 'pit',
      img: 'images/gifs/5.gif'
    },
    {
      name: 'pit',
      img: 'images/gifs/5.gif'
    },
    {
      name: 'theWorst',
      img: 'images/gifs/6.gif'
    },{
      name: 'theWorst',
      img: 'images/gifs/6.gif'
    },
    {
      name: 'swanson',
      img: 'images/gifs/7.gif'
    },
    {
      name: 'swanson',
      img: 'images/gifs/7.gif'
    },
    {
      name: 'april',
      img: 'images/gifs/8.gif'
    },
    {
      name: 'april',
      img: 'images/gifs/8.gif'
    }
  ]
 
  //GLOBAL VARIABLES & FUNCTIONS
  const sortArr = ()=> cardArray.sort(()=> 0.3- Math.random());
  sortArr();
  
 
  const grid = document.querySelector('#grid')
  let cardChosen = []
  let cardChosenId = [];
  const clearArray = function(){
   cardChosen = [];
   cardChosenId = [];
  };
  let pairsFound = 0;
  let moves= 0;
  const greenBlank = 'images/pnr_blank1.jpeg';
  const movesDisplay = document.getElementById("result");

  const moveDisplayFunc = function(){
    moves++;
    movesDisplay.textContent = `${moves}`;
  };



 //CREATE BOARD function------------------------------
function createBoard(){
  for(let i = 0; i< cardArray.length;i++){
    let card = document.createElement('img');
    //setting each card image to a blank card (the flipped over position)
    card.setAttribute('src',`${greenBlank}`);
    //giving each card a data id--data id's are useful when wanting to store data that is constantly changing and also when wanting to store extra information on standard elements without having to use hacks that you would need to use with non-standard attributes.
    card.setAttribute('data-id', i); //this gives the element a data-id between 0 and cardArray.length -1
    card.setAttribute('class', 'card');
    //ADD EVENT LISTENER TO INVOKE FUNCTION WHEN CARDS ARE CLICKED ON-- when writing this part, we will have to comment this out as we have not made the function flipcard yet.
    card.addEventListener('click', flipCard)
    //NOW we will add each iteration to the grid
    grid.appendChild(card);
  }
}

// CHECK FOR MATCHES------------------------------
function checkMatch(){
  let flippedCard;
  //FINDING A MATCH
  if (cardChosen[0]===cardChosen[1]){
    //"remove" card from game
    cardChosen.map((_,i)=>{
      flippedCard = document.querySelector(`[data-id='${cardChosenId[i]}']`);
      flippedCard.setAttribute('src','images/white_blank.jpg');
      // flippedCard.style.padding= "0";
    });
    // ADD MOVE TO MOVES
    moveDisplayFunc();
    //ADD PAIR TO PAIRS FOUND
    pairsFound++;
    // CLEAR OUT CARDCHOSEN/CHARDCHOSENID ARRAY USING POP
    cardChosen=[];
    cardChosenId =[];
  } 
  //NOT FINDING A MATCH
  else if(cardChosen[0]!== cardChosen[1]){
    //FLIP CARDS BACK OVER
    const flipBack = function(){
      return cardChosen.map((_,i)=>{
      flippedCard = document.querySelector(`[data-id='${cardChosenId[i]}']`);
      flippedCard.setAttribute('src',`${greenBlank}`);
      });
    }
    flipBack();
    //ADD MOVE TO MOVES
    moveDisplayFunc();
    // CLEAR OUT CARDCHOSEN/CHARDCHOSENID ARRAY USING POP
    clearArray();
    
  }
  else {alert('error')};
  //ALERT WHEN ALL CARDS ARE MATCHED
  const won = function(){
    if(pairsFound===8){
    alert('YOU WON!');
    }
  };
  won();
};

// FLIP YOUR CARD------------------------------
function flipCard (){
  let cardId = this.getAttribute('data-id');
  cardChosen.push(cardArray[cardId].name);
  cardChosenId.push(cardId);
  // SHOWING THE GIF
  const show = function(){
    let flipped = document.querySelector(`[data-id='${cardId}']`);
    flipped.setAttribute('src', cardArray[cardId].img);
  }
  //PREVENTING CARDS BEING SHOWN AFTER TWO HAVE BEEN CHOSEN
  if(cardChosen.length<=2){
    show();
  };
  
  if (cardChosen.length ===2){
    setTimeout(checkMatch, 1500);
  };
}
createBoard();
//RESTART BUTTON
function restart(){
  const classCard = document.querySelectorAll('.card');
  //In order to map over the nodelist, we need to make the nodelist into an array by using the spread operator
  const sprdNodeList = [...classCard]; 
  //Use the map method to remove each card from the html
  sprdNodeList.map(x=>x.remove());
  //CLEAR OUT PAIRSFOUND
  pairsFound = 0;
  //RE-SORT THE CARD ARRAY
  sortArr();
  //RECREATE BOARD
  createBoard()
}
const restartBtn = document.querySelector('#restart_btn');
restartBtn.addEventListener('click', restart );




  //INFO BUTTON
  const infoBtn = document.querySelector('#info_btn');
  const info = function(){
    alert('HOW TO PLAY THE GAME: Click on any two cards to flip them over and see if they match. When the two chosen cards match, they will be removed from the board and your moves at the bottom-left of the screen will increase by one. When the two chosen cards DO NOT match, they will be flipped back over and your moves will increase by one as well. The goal is to memorize where the pairs are and complete the game with the lowest possible moves. The game continues until all cards have been matched.')
  }
  infoBtn.addEventListener('click',info)
});

