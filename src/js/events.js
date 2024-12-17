import { printVar,typeVar } from '/src/js/helper.js';
import { loadWelcome,getPlayerName } from '/src/js/functions.js';

//DOM ELEMENTS:
let formPlayerName = document.getElementById("start-form");



//EVENTS:

// document.addEventListener("DOMContentLoaded", loadWelcome)

document.addEventListener("DOMContentLoaded", loadWelcome);
formPlayerName.addEventListener("submit", getPlayerName);


  // Jugador elige el vaso 
  let playerChoice = parseInt(prompt("Elige un vaso (1, 2 o 3):")); // Input del jugador
  playGame(playerChoice);
  




























// // formulario de inicio
// document.getElementById('start-form').addEventListener('submit', function(event) {
//     event.preventDefault();

//     // Obtener nombre del jugador
//     const playerName = document.getElementById('player-name').value.trim();

//     // Validar el nombre 
//     if (validatePlayerName(playerName)) {
//         // Si es válido, actualizamos el nombre del jugador y comenzamos el juego
//         updatePlayerName(playerName);
//         startGame();
//     } else {
//         // Si es inválido, alerta
//         alert("Por favor, ingresa solo letras en el nombre.");
//     }
// });

// // Botón de reinicio del juego
// document.getElementById('reset-btn').addEventListener('click', function() {
//     resetGame();
// });




