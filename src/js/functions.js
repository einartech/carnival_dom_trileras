let gameElements = {
  elementCupOne: false,
  elementCupTwo: false,
  elementCupThree: false,
  ball: false,
};


function loadWelcome() {
   console.log(`0 > loadWelcome >> All contents loaded`);

}

function getPlayerName(event) {
  event.preventDefault();
  let getPlayerNameFromInput = document.getElementById('player-name').value;

  setPlayerName(getPlayerNameFromInput);
  showNewModal(getPlayerNameFromInput);
  defaultPlayerInfo(getPlayerNameFromInput);
  defaultGameInfo();
}

function showNewModal(playerName) {
  let getTitle = document.querySelector(".modal-title");
  getTitle.textContent = `${playerName} el juego de las Trileras esta a punto de empezar...`;
  let getform = document.querySelector("form");
  getform.style.display = "none";

}

function setPlayerName(playerName) {
  let updatePlayerName = document.querySelector(".player-name");
  updatePlayerName.textContent = playerName;

  setTimeout(hidePlayerModal, 2000);

}

function hidePlayerModal() {
  let myModal = document.querySelector(".start-game-container");
  myModal.style.display = "none";


}

function incrementScore() {
  const scoreElement = document.querySelector('.score');
  let currentScore = parseInt(scoreElement.textContent);
  let newScore = currentScore + 1;
  scoreElement.textContent = newScore ;
  console.log(gameElements)
  startTrileras(gameElements);
}


function defaultPlayerInfo(playerName) {
  let playerInfo = {
      playerName: "${getPlayerNameFromInput}",
      playerScore: 0,
      playerHighScore: 0,
      playerSeconds: 15,
      playerWin: false,
  };

}

function defaultGameInfo() {
  //  gameElements = {
  //     elementCupOne: false,
  //     elementCupTwo: false,
  //     elementCupThree: false,
  //     ball: true,
  // };
  startTrileras(gameElements)
}


function startTrileras(gameElements) {

  setTimeout(() => {
      moveCups();

  }, 5000);

  let winner = Math.ceil(Math.random() * 3);
  console.log(`La copa ganadora es: ${winner}`)

  console.log(gameElements);

  if (winner == 1) {
      console.log("El vaso ganador es el 1")
      gameElements.ball = 1;

  } else if (winner == 2) {
      console.log("El vaso ganador es el 2")
      gameElements.ball = 2;

  } else if (winner == 3) {
      console.log("El vaso ganador es el 3")
      gameElements.ball = 3;
  } else {
      alert("No has encontrado el vaso ganador");
  }

}

function moveCups() {
  const cupOne = document.querySelector("#cup1")
  const cupTwo = document.querySelector("#cup2")
  const cupThree = document.querySelector("#cup3")
  const ball = document.querySelector(".pelota");
  ball.setAttribute('style', 'top: 2000px');
  const vasosPadre = document.querySelector('.imagenes-cont')

  setTimeout(() => {
      vasosPadre.setAttribute('style', 'justify-content: center')
      ball.setAttribute('style', 'margin-top: -4rem')
  }, 2000);

  setTimeout(() => {
      vasosPadre.setAttribute('style', 'flex-direction: column')
      ball.setAttribute('style', 'visibility:hidden')
  }, 3000);

  setTimeout(() => {
      vasosPadre.setAttribute('style', 'flex-direction: row-reverse')
  }, 4000);

  setTimeout(() => {
      vasosPadre.setAttribute('style', 'flex-direction: column-reverse')
  }, 5000);

  setTimeout(() => {
      vasosPadre.setAttribute('style', 'flex-direction: row')
  }, 6000);

  setTimeout(() => {
      vasosPadre.setAttribute('style', 'justify-content: center')
  }, 7000);


  setTimeout(() => {
      vasosPadre.setAttribute('style', 'flex-direction: column')
  }, 8000);

  setTimeout(() => {
      vasosPadre.setAttribute('style', 'flex-direction: row-reverse')
  }, 9000);

  setTimeout(() => {
      vasosPadre.setAttribute('style', 'flex-direction: column-reverse')
  }, 10000);

  setTimeout(() => {
      vasosPadre.setAttribute('style', 'flex-direction: row')
  }, 11000);

}

function selectCup1() {
gameElements.elementCupOne=true;

  console.log("hola soy select cup 1");
  console.log(gameElements.elementCupOne);

  result();


}

function selectCup2() {
  gameElements.elementCupTwo=true;
  console.log("hola soy select cup 2");
  console.log(gameElements.elementCupTwo);

  result();


}

function selectCup3() {
  gameElements.elementCupThree=true;
  console.log("hola soy select cup 3");
  console.log(gameElements.elementCupThree);

  result();

}


function result(){
  if (gameElements.elementCupOne ===true && gameElements.ball === 1) {
    myAlertWin("HAS GANADO, la pelota esta en el vaso 1")
    incrementScore()
} else if (gameElements.elementCupTwo === true && gameElements.ball === 2) {
  myAlertWin("HAS GANADO, la pelota esta en el vaso 2")
  incrementScore()
} else if (gameElements.elementCupThree === true && gameElements.ball === 3) {
  myAlertWin("HAS GANADO, la pelota esta en el vaso 3")
  incrementScore()
} else {
  myAlertLose("HAS PERDIDO, intentalo otra vez!")
  startTrileras(gameElements);
}
}

function myAlertWin(message) { 
  let myAudio= document.createElement('audio');
  let myMessageAlert = "Has ganado!";
  myAudio.src = 'Sound/win.mp3';
  myAudio.addEventListener('ended', function(){
      alert(myMessageAlert);            
  });
    myAudio.play();
    myMessageAlert = message;
} 

function myAlertLose(message) { 
  let myAudio= document.createElement('audio');
  let myMessageAlert = "Has perdido!";
  myAudio.src = 'Sound/game-over.mp3';
  myAudio.addEventListener('ended', function(){
      alert(myMessageAlert);            
  });
    myAudio.play();
    myMessageAlert = message;
} 

function resetFunction(){
console.log("pendiente de crear")
}


export {
  loadWelcome,
  getPlayerName,
  selectCup1,
  selectCup2,
  selectCup3,
  resetFunction
}