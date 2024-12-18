import { printVar,typeVar } from '/src/js/helper.js';
import { loadWelcome,getPlayerName } from '/src/js/functions.js';

//DOM ELEMENTS:
let formPlayerName = document.getElementById("start-form");



//EVENTS:

// document.addEventListener("DOMContentLoaded", loadWelcome)

document.addEventListener("DOMContentLoaded", loadWelcome);
formPlayerName.addEventListener("submit", getPlayerName);


// score

const winButton = document.getElementById('winButton');
winButton.addEventListener('click', incrementScore);





  // Jugador elige el vaso 
  // let playerChoice = parseInt(prompt("Elige un vaso (1, 2 o 3):")); // Input del jugador
  // playGame(playerChoice);
  
  //Click on cup
  // const cup =  document.getElementsByClassName("vasos");

//console.log(cup)
 // 
 // console.log(ball)
//const startGame = document.querySelector("#openmodal")
//console.log(startGame)

//const moveCups {
 // const ball = document.querySelector(".pelota");
//ball.addClass('isHidden');
//   ball.setInterval(function(){()},time * 1000)<img class="pelota" src="src/img/pelota.jpg" alt="pelota para jugar">
// }

//   function winAlert {
// if {

// }
//   }

// cup.addEventListener("click", moveCup);


























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




