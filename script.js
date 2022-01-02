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
 
  cardArray.sort(()=> 0.3- Math.random());
 
  const grid = document.querySelector('#grid')
  let flipped;
  let cardChosen = []
  let cardChosenId = [];
  let cardsWon = [];

 //CREATE BOARD function

function createBoard(){
  for(let i = 0; i< cardArray.length;i++){
    let card = document.createElement('img');
    //setting each card image to a blank card (the flipped over position)
    card.setAttribute('src','images/pnr_blank1.jpeg');
    //giving each card a data id--data id's are useful when wanting to store data that is constantly changing and also when wanting to store extra information on standard elements without having to use hacks that you would need to use with non-standard attributes.
    card.setAttribute('data-id', i); //this gives the element a data-id between 0 and cardArray.length -1
    console.log(card);
    //ADD EVENT LISTENER TO INVOKE FUNCTION WHEN CARDS ARE CLICKED ON-- when writing this part, we will have to comment this out as we have not made the function flipcard yet.
    card.addEventListener('click', flipCard)
    //NOW we will add each iteration to the grid
    grid.appendChild(card);
  }
}

// CHECK FOR MATCHES
function checkMatch(){
  if (cardChosen[1]===cardChosen[2]){
    
  }
  cardChosen = [];
  cardChosenId = [];
}

// FLIP YOUR CARD

function flipCard (){
  let cardId = this.getAttribute('data-id');
  cardChosen.push(cardArray[cardId].name);
  cardChosenId.push(cardId);
  if (cardChosen ===2){
    setTimeout(checkMatch, 200);
  };
  console.log(cardChosen);
  console.log(cardChosenId);
  // SHOWING THE GIF
  flipped = document.querySelector(`[data-id='${cardId}']`);
  flipped.setAttribute('src', cardArray[cardId].img);
}


// function restart(){
//   const restartBtn = document.querySelector('#restart_btn');
//   restartBtn.addEventListener('click', createBoard());
// }

createBoard()
})
