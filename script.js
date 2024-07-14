let randomNumber = Math.floor(Math.random() * 100) + 1; // Generate random number between 1 and 100
let guessCount = 0; // Count the number of guesses

const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const message = document.getElementById('message');

guessButton.addEventListener('click', () => {
  const guess = parseInt(guessInput.value);

  if (isNaN(guess)) {
    message.textContent = 'Please enter a valid number.';
    return;
  }

  guessCount++;

  if (guess === randomNumber) {
    message.textContent = `Correct guess! It took you ${guessCount} trials.`;
    guessButton.disabled = true; // Disable button after correct guess
  } else if (guess > randomNumber) {
    message.textContent = 'Too high!';
  } else {
    message.textContent = 'Too low!';
  }

  guessInput.value = ''; // Clear input field after each guess
});
