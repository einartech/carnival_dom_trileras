
function loadWelcome() {
    console.log(`0 > loadWelcome >> All contents loaded`);
    
}

function getPlayerName(event) {
     event.preventDefault();
    let getPlayerNameFromInput = document.getElementById('player-name').value;
    console.log(`0 > getPlayerName >> ${getPlayerNameFromInput}`);

    setPlayerName(getPlayerNameFromInput);
    showNewModal(getPlayerNameFromInput);
    defaultPlayerInfo(getPlayerNameFromInput);
    defaultGameInfo();
}

function showNewModal(playerName){
    console.log(`0 > showNewModal >> ${playerName}`);
    let getTitle = document.querySelector(".modal-title");
    getTitle.textContent=`${playerName} el juego de las Trileras esta a punto de empezar...`;
    let getform = document.querySelector("form");
    getform.style.display="none";

}

function setPlayerName(playerName) {
    console.log(`0 > setPlayerName >> ${playerName}`);
   let updatePlayerName = document.querySelector(".player-name");
   updatePlayerName.textContent=playerName;
   console.log(`1 > setPlayerName >> ${playerName}`);
  
   setTimeout(hidePlayerModal, 4000);

}

function hidePlayerModal (){
console.log(`0 > hidePlayerModal >> ...`);

let myModal= document.querySelector(".start-game-container");
myModal.style.display="none";


}

<<<<<<< HEAD
// score
function incrementScore() {
    const scoreElement = document.querySelector('.player-total-score');
    const currentScore = parseInt(scoreElement.textContent, 0) || 0;
    const newScore = currentScore + 1;
    scoreElement.textContent = newScore;
  }











export {getPlayerName}
=======

//Start Trileras Tetiana



function defaultPlayerInfo (playerName){
console.log('defaultPlayerInfo')

let playerInfo = {
    playerName: "${getPlayerNameFromInput}",
    playerScore: 0,
    playerHighScore: 0, 
    playerSeconds: 15,
    playerWin: false,
  };
  console.table(playerInfo)
  
}

function defaultGameInfo() {
    let gameElements = {
    elementCupOne: false,
    elementCupTwo: false,
    elementCupThree: false, 
    ball: true,
      };

  startTrileras(gameElements)

//  cupOne = Math.random(Math.max(3));
}


function startTrileras(gameElements) {
//console.log("nuestra funcion")

moveCups();
if (gameElements.elementCupOne === true && gameElements.ball=== true) {
    console.log("La pelota se encuentra en la copa 1")
    } else if (gameElements.elementCupTwo === true && gameElements.ball=== true) { 
        console.log("La pelota se encuentra en la copa 2")
    } else if (gameElements.elementCupThree === true && gameElements.ball=== true) {
        console.log("La pelota se encuentra en la copa 3")
    } else {
        console.log("else")
    }


}

function moveCups() {
    console.log("cups moved")
    const cup =  document.querySelector(".vasos");

const cupOne = document.querySelector("#cup1")

const cupTwo = document.querySelector("#cup2")

const cupThree = document.querySelector("#cup3")

const ball = document.querySelector(".pelota");


}
export { loadWelcome,getPlayerName }
>>>>>>> development
















// //Validar el nombre del jugador 
// function validatePlayerName(playerName) {
//     return /^[A-Za-z]+$/.test(playerName); // Validar solo letras
// }

// // Cambiar el nombre del jugador 
// function updatePlayerName(playerName) {
//     console.log(playerName)

//     document.querySelector('.player-name').textContent = playerName;
// }


// // Iniciar el juego 
// function startGame() {
//     document.querySelector('.start-game-container').style.display = 'none';
//     document.getElementById('game-container').style.display = 'block';
// }

// // Reiniciar el juego 
// function resetGame() {
//     // Mostrar el formulario de inicio y ocultar el juego
//     document.querySelector('.start-game-container').style.display = 'block';
//     document.getElementById('game-container').style.display = 'none';
    
//     // Limpiar el campo de nombre
//     document.getElementById('player-name').value = '';
//     document.querySelector('.player-name').textContent = ''
// }

