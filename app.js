const gameContainer = document.getElementById("game");
const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset');
const scoreSpan = document.querySelector('.score');
const currentScore = document.querySelector('.currentScore')


let flippedCards = [];

let card1 = null;
let card2 = null;

let clicks = 0;

let noClicking = false;

//reset button
resetBtn.addEventListener('click', function(){
 
  

  console.log(shuffledColors)
  
createDivsForColors(shuffledColors);



let flippedCards = [];
let card1 = null;
let card2 = null;

  //reset clicks
  clicks = 0;
  currentScore.innerHTML = clicks;
  scoreSpan.append(currentScore);
  localStorage.setItem('currentScore', JSON.stringify(clicks))

  //reset all values in your js and save those values to local storage
  

})


const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);
// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");


    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
    startBtn.addEventListener('click', function () {

      // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);
    })


    // append the div to the element with an id of game
    gameContainer.append(newDiv);

  }
}


// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log(event)
  const selectedCard = event.target;

  if(selectedCard.classList.contains('flipped')){
    return;
  }

  selectedCard.style.backgroundColor = selectedCard.className
  selectedCard.classList.toggle('flipped')

  var clickedCard = {cardColor: selectedCard.className, target: selectedCard}


  if(card2 === null){
    card2 = {cardColor: selectedCard.className, target: selectedCard}

  }
  
  if(card2 !== null && card1 === null){
    card1 = card2;
    card2 = null;
  }


          //display click count
          clicks++;
          currentScore.innerHTML = clicks;
          scoreSpan.append(currentScore);
          flippedCards.push(card2)


      if(clicks % 2 === 0){
        noClicking = true;

        if(card2.cardColor !== card1.cardColor){
          setTimeout( function () {

            card1.target.style.background = 'none';
            card2.target.style.background = 'none';

            card1 = null;
            card2 = null;
            }, 500);
              //remove flipped class
              card1.target.classList.toggle('flipped')
              card2.target.classList.toggle('flipped')
              
        }
        else{
          flippedCards.push(card2)
          localStorage.setItem('flippedCards', JSON.stringify(flippedCards))
          console.log(flippedCards)
          card1 = null;
          card2 = null;

        }
        
      } 
      //setup localStorage
      localStorage.setItem('currentScore', JSON.stringify(clicks))

}

// when the DOM loads
createDivsForColors(shuffledColors);


