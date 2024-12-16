//Esta funcion printa la variable que se le pasa
function printVar(parameter){
    return console.table(parameter);
 }
 

//Esta funcion printa el TIPO de variable que se le pasa
 function typeVar(parameter){
    return console.log(typeof parameter);
 }


 export {printVar,typeVar}











//  //Validar el nombre del jugador 
// function validatePlayerName(playerName) {
//    return /^[A-Za-z]+$/.test(playerName); // Validar solo letras
// }

// // Cambiar el nombre del jugador 
// function updatePlayerName(playerName) {
//    document.querySelector('.player-name').textContent = playerName;
// }

// // Iniciar el juego 
// function startGame() {
//    document.querySelector('.start-game-container').style.display = 'none';
//    document.getElementById('game-container').style.display = 'block';
// }

// // Reiniciar el juego 
// function resetGame() {
//    // Mostrar el formulario de inicio y ocultar el juego
//    document.querySelector('.start-game-container').style.display = 'block';
//    document.getElementById('game-container').style.display = 'none';
   
//    // Limpiar el campo de nombre
//    document.getElementById('player-name').value = '';
//    document.querySelector('.player-name').textContent = ''
// }