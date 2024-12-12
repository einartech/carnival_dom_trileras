// Función para validar el nombre del jugador (solo letras)
function validatePlayerName(playerName) {
    return /^[A-Za-z]+$/.test(playerName); // Validar solo letras
}

// Función para cambiar el nombre del jugador en la interfaz
function updatePlayerName(playerName) {
    document.querySelector('.player-name').textContent = playerName;
}

// Función para iniciar el juego (ocultar formulario y mostrar el juego)
function startGame() {
    document.querySelector('.start-game-container').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
}

// Función para reiniciar el juego 
function resetGame() {
    // Mostrar el formulario de inicio y ocultar el juego
    document.querySelector('.start-game-container').style.display = 'block';
    document.getElementById('game-container').style.display = 'none';
    
    // Limpiar el campo de nombre
    document.getElementById('player-name').value = '';
    document.querySelector('.player-name').textContent = ''
}
