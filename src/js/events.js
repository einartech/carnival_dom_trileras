// formulario de inicio
document.getElementById('start-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener nombre del jugador
    const playerName = document.getElementById('player-name').value.trim();

    // Validar el nombre 
    if (validatePlayerName(playerName)) {
        // Si es válido, actualizamos el nombre del jugador y comenzamos el juego
        updatePlayerName(playerName);
        startGame();
    } else {
        // Si es inválido, alerta
        alert("Por favor, ingresa solo letras en el nombre.");
    }
});

// Botón de reinicio del juego
document.getElementById('reset-btn').addEventListener('click', function() {
    resetGame();
});
