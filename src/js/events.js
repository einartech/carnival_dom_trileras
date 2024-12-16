import { printVar,typeVar } from '/src/js/helper.js';
import { getPlayerName } from '/src/js/functions.js';
// import {add, reset, decrease} from './counter.js'


//PASOS A SEGUIR!
//1.- AL CLICAR EL BOTON, DEBE HACER UN CONSOLE.LOG OK
//1.- DIVIDIR ZONAS, LOS EVENT LISTENERS EN EVENTS Y LAS FUNCIONES EN EL OTRO LADO

// let formPlayerName=document.getElementById("player-name");
// console.log(formPlayerName)

// let modalPlayerInfo=document.getElementById("openmodal");
// modalPlayerInfo.addEventListener("click", validatePlayerName);

let formPlayerName = document.getElementById("start-form");
formPlayerName.addEventListener("submit", getPlayerName);


// score

const winButton = document.getElementById('winButton');
winButton.addEventListener('click', incrementScore);

































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




