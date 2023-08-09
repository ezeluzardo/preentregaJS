const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let guessedCorrectly = false;

while (!guessedCorrectly) {
    const userGuess = prompt('Ingresa un número entre 1 y 100:');
    const parsedGuess = parseInt(userGuess);

    if (isNaN(parsedGuess) || parsedGuess < 1 || parsedGuess > 100) {
        alert('Por favor, ingresa un número válido entre 1 y 100.');
    } else {
        attempts++;

        if (parsedGuess === randomNumber) {
            guessedCorrectly = true;
            alert(`¡Felicitaciones! Adivinaste el número ${randomNumber} en ${attempts} intentos.`);
        } else if (parsedGuess < randomNumber) {
            alert('Intenta con un número más grande.');
        } else {
            alert('Intenta con un número más pequeño.');
        }
    }
}
