

var whoWins= $('.whoWins');

// var box1 = document.querySelector('#box1');
// var box2 = document.querySelector('#box2');
// var box3 = document.querySelector('#box3');
// var box4 = document.querySelector('#box4');
// var box5 = document.querySelector('#box5');
// var box6 = document.querySelector('#box6');
// var box7 = document.querySelector('#box7');
// var box8 = document.querySelector('#box8');
// var box9 = document.querySelector('#box9');

var box1 = $('#box1');
var box2 = $('#box2');
var box3 = $('#box3');
var box4 = $('#box4');
var box5 = $('#box5');
var box6 = $('#box6');
var box7 = $('#box7');
var box8 = $('#box8');
var box9 = $('#box9');

// var allBoxes = document.querySelectorAll('.box');
$('.box').click(function() {
  if (numberOfClicks%2 === 0) {
    this.innerText= "x";}
  else {
    this.innerText= "o";
    this.style.color="white";
  }
  numberOfClicks+=1;
  xWins();
  yWins();
  deleteWins();
});

// box1.addEventListener('click', addChar);
// box2.addEventListener('click', addChar);
// box3.addEventListener('click', addChar);
// box4.addEventListener('click', addChar);
// box5.addEventListener('click', addChar);
// box6.addEventListener('click', addChar);
// box7.addEventListener('click', addChar);
// box8.addEventListener('click', addChar);
// box9.addEventListener('click', addChar);


var numberOfClicks=0;
// function addChar() {
//
//   if (numberOfClicks%2 === 0) {
//     this.innerText= "x";}
//   else {
//     this.innerText= "o";
//     this.style.color="white";
//   }
//   numberOfClicks+=1;
//   xWins();
//   yWins();
//   deleteWins();
//
// }


function xWins() {
  if ((box1.innerText==='x' && box2.innerText==='x' && box3.innerText==='x') ||
  (box4.innerText==='x' && box5.innerText==='x' && box6.innerText ==='x') ||
  (box7.innerText==='x' && box8.innerText==='x' && box9.innerText==='x') ||

  (box1.innerText==='x' && box4.innerText==='x' && box7.innerText==='x') ||
  (box2.innerText==='x' && box5.innerText==='x' && box8.innerText==='x') ||
  (box3.innerText==='x' && box6.innerText==='x' && box9.innerText==='x') ||

  (box1.innerText==='x' && box5.innerText==='x' && box9.innerText==='x') ||
  (box3.innerText==='x' && box5.innerText==='x' && box7.innerText==='x'))

  {
    whoWins.innerText= "X Wins!";
    reset();
    console.log('X wins!');
  }
}

function yWins() {
  if ((box1.innerText==='o' && box2.innerText==='o' && box3.innerText==='o') ||
  (box4.innerText==='o' && box5.innerText==='o' && box6.innerText ==='o') ||
  (box7.innerText==='o' && box8.innerText==='o' && box9.innerText==='o') ||

  (box1.innerText==='o' && box4.innerText==='o' && box7.innerText==='o') ||
  (box2.innerText==='o' && box5.innerText==='o' && box8.innerText==='o') ||
  (box3.innerText==='o' && box6.innerText==='o' && box9.innerText==='o') ||

  (box1.innerText==='o' && box5.innerText==='o' && box9.innerText==='o') ||
  (box3.innerText==='o' && box5.innerText==='o' && box7.innerText==='o'))

  {
    whoWins.innerText= "O Wins!";
    console.log('O wins!');
    reset();
  }
}

function reset() {
  box1.innerText= "";
  box2.innerText= "";
  box3.innerText= "";
  box4.innerText= "";
  box5.innerText= "";
  box6.innerText= "";
  box7.innerText= "";
  box8.innerText= "";
  box9.innerText= "";
  numberOfClicks=0;
}

function deleteWins() {
  if (numberOfClicks>0) {
    whoWins.innerText="";
  }
}
