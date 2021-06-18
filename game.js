const gameDisplay = document.querySelector('.game-display');
const startDisplay = document.querySelector('.start-display');
const timeOutDisplay2 = document.querySelector('.time-out-display2');
const scoreDisplayNum = document.querySelector('.score-display-num');
const btnStart = document.querySelector('#btn-start');
const showScore = document.querySelector('.show-score');
const showScoreBox = document.querySelector('.ShowScoreBox');
const screenWidth = screen.width;



let sizeCricleItem;
let LengthCricleItem;
let score = 0;
let score2 = 0;
let timeOutGame;
let timerId;
let wid = 300;

function checkWidth() {
  if (screenWidth < 400) {
    sizeCricleItem = (Math.floor(screenWidth / 10)) - 2;
    console.log(sizeCricleItem);
    LengthCricleItem = 100;
  }
  else {
    sizeCricleItem = 50;
    LengthCricleItem = 229;
  }
}

function timeGame() {
  setTimeout(() => {
    timeOutGame = setTimeout(a = () => {
      console.log('timeOutGame');
      timeOutDisplay2.style.width = `${wid -= 20}px`;

      timeOutGame = setTimeout(a, 1000);
      if (wid <= 0) endGame();
    }, 1000);
    console.log('timeGAME');
  }, 1000);
}
//timeGame()


function startGame() {
  checkWidth();
  timeGame();
  timerId = setTimeout(function time() {
    gameDisplay.innerHTML = ShowGame();
    let circleBox = document.querySelectorAll('.circle-box');
    
    circleBox.forEach(function(el) {
      el.style.width = sizeCricleItem + 'px';
      el.style.height = sizeCricleItem + 'px';
    })


    let length;
    let color;
    let arrIndexItem = [];

    if (score < 10) length = getRndInteger(10, 20);
    if (score >= 10) length = getRndInteger(25, 50);
    if (score >= 20) length = getRndInteger(30, Math.floor(LengthCricleItem / 3));
    if (score >= 30) length = getRndInteger(35, Math.floor(LengthCricleItem / 2));
    if (score >= 40) length = getRndInteger(20, LengthCricleItem);

    //console.log(length);

    for (let i = 0; i <= length; i++) {
      let numRandom = getRndInteger(0, LengthCricleItem);

      while ((arrIndexItem.indexOf(numRandom) !== -1)) {
        numRandom = getRndInteger(0, LengthCricleItem);
        //console.log(numRandom);
        //console.log('ok');
      }
      arrIndexItem.push(numRandom);

      circleBox[numRandom].innerHTML = `<div class="circle" style="background: ${color = randomColor()}"><p>${circleScore(color)}</p><div>`;
      circleBox[numRandom].addEventListener('click', function () {
        //console.log(this.textContent);
        circleBox[numRandom].style.display = 'none';
        (this.textContent == 'X') ? endGame() : wid += +this.textContent * 2;
        (wid >= 300) ? wid = 300 : wid;
        score += +this.textContent;
        (isNaN(score) === true) ? score = 0 : score;
        scoreDisplayNum.innerHTML = score;
      })
    }
    getCircle();
    // console.log('s');
    // circleBoxP = document.querySelectorAll('.circle p');

    timerId = setTimeout(time, 1000);
  }, 1000)

  //console.log(circleBoxP);
  // circleBox.forEach(function(element) {
  //   element.addEventListener('click', function() {
  //     console.log(this.innerHTML);
  //     console.log(ok);
  //   })
  // })
}



function circleScore(color) {
  let scoreC;
  switch (color) {
    case 'red':
      scoreC = 10;
      break;
    case 'blue':
      scoreC = 5;
      break;
    case 'green':
      scoreC = 2;
      break;
    case 'orange':
      scoreC = 1;
      break;
    case 'black':
      scoreC = 'X';
      break;
    default:
      break;
  }
  return scoreC;
}

function randomColor() {
  let color;
  let i = getRndInteger(1, 5);

  switch (i) {
    case 1:
      color = 'red';
      break;
    case 2:
      color = 'blue';
      break;
    case 3:
      color = 'green';
      break;
    case 4:
      color = 'orange';
      break;
    case 5:
      color = 'black';
      break;
    default:
      break;
  }

  return color;
}


function ShowGame() {
  let a = `<div class="circle-box"></div>`;

  for (var i = 0; i < LengthCricleItem; i++) {
    a += `<div class="circle-box"></div>`;
  }
  //a = `<div class="circle-box"></div>`;
  return a;
}


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function endGame() {
  clearTimeout(timerId);
  clearTimeout(timeOutGame);

  (isNaN(score) === true) ? score = 0 : score;
  score2 = score;
  showScore.innerHTML = score2;
  btnStart.innerHTML = 'PLAY AGAIN';
  startDisplay.style.display = 'block';
  score = 0;
  score.innerHTML = score;
  wid = 300;
  timeOutDisplay2.style.width = wid;
}

btnStart.addEventListener('click', function () {
  startDisplay.style.display = 'none';
  //startGame();
})

btnStart.addEventListener('click', function () {
  startDisplay.style.display = 'none';
  showScoreBox.style.display = 'block';
  startGame();
})

function getCircle() {
  let circle = document.querySelector('.circle');

  circle.style.width = sizeCricleItem + 'px';
  circle.style.height = sizeCricleItem + 'px';

}


function getCircleBox() {
  let circleBox = document.querySelector('circle-box');

  circleBox.style.width = sizeCricleItem + 'px';
  circleBox.style.height = sizeCricleItem + 'px';

}
