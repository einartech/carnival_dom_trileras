
function getPlayerName(event) {
     event.preventDefault();
    let getPlayerNameFromInput = document.getElementById('player-name').value;
    console.log(`0 > getPlayerName >> ${getPlayerNameFromInput}`);
    setPlayerName(getPlayerNameFromInput)
}


function setPlayerName(playerName) {
    console.log(`0 > setPlayerName >> ${playerName}`);
   let updatePlayerName = document.querySelector(".player-name");
   updatePlayerName.textContent=playerName;
   console.log(`1 > setPlayerName >> ${playerName}`);
  
   setTimeout(hidePlayerModal, 2000);

}

function hidePlayerModal (){
console.log(`0 > hidePlayerModal >> ...`);

let myModal= document.querySelector(".start-game-container");
myModal.style.display="none";
}

// score
function incrementScore() {
    const scoreElement = document.querySelector('.player-total-score');
    const currentScore = parseInt(scoreElement.textContent, 0) || 0;
    const newScore = currentScore + 1;
    scoreElement.textContent = newScore;
  }











export {getPlayerName}
















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

