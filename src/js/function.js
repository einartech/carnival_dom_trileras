//Validar el nombre del jugador 
function validatePlayerName(playerName) {
    return /^[A-Za-z]+$/.test(playerName); // Validar solo letras
}

// Cambiar el nombre del jugador 
function updatePlayerName(playerName) {
    document.querySelector('.player-name').textContent = playerName;
}

// Iniciar el juego 
function startGame() {
    document.querySelector('.start-game-container').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
}

// Reiniciar el juego 
function resetGame() {
    // Mostrar el formulario de inicio y ocultar el juego
    document.querySelector('.start-game-container').style.display = 'block';
    document.getElementById('game-container').style.display = 'none';
    
    // Limpiar el campo de nombre
    document.getElementById('player-name').value = '';
    document.querySelector('.player-name').textContent = ''
}

// Función aleatorea posición de la bolita
function getRandomPosition(totalVasos) {
    return Math.floor(Math.random() * totalVasos) + 1; // Números entre 1 y 3
  }
  
  // Función para mostrar el mensaje de alerta
  function showMessage(isWinner) {
    if (isWinner) {
      alert("¡Felicidades, has acertado!");
    } else {
      alert("Has fallado. Inténtalo de nuevo.");
    }
  }
  
  // Lógica principal del juego
  function playGame(playerChoice) {
    const totalVasos = 3; // Número de vasos en el juego
    const ballPosition = getRandomPosition(totalVasos); // Posición aleatoria de la bolita
  
    console.log(`La bolita está debajo del vaso número: ${ballPosition}`); // Info al jugador del vaso con bolita
  
    // Compara la elección del jugador con la posición de la bolita
    if (playerChoice === ballPosition) {
      showMessage(true); // Jugador gana
    } else {
      showMessage(false); // Jugador pierde
    }
  }
  
 
