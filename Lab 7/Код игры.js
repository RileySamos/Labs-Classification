const randomNumber = Math.floor(Math.random() * 10) + 1;
let attemptsLeft = 7;
document.getElementById('guessButton').addEventListener('click', makeGuess);
function makeGuess() {
    let userGuess = parseInt(document.getElementById('guessInput').value);
    let feedback = document.getElementById('feedback');
    let attempts = document.getElementById('attempts');


    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        feedback.textContent = 'Напишите число от 1 до 10. Даю вам всего 7 попыток.';
        setTimeout(function() {
            if (confirm("Неправильно! Давай ещё раз.")) {
                window.location.reload();
            }
            }, 500);
    }

     if (userGuess === randomNumber) {
         feedback.textContent = 'Поздравляю! Идите в казино!';
         attempts.textContent = '';
         setTimeout(resetGame, 2000);
     } else if (userGuess > randomNumber) {
         attemptsLeft--;
         attempts.textContent = `Сколько попыток осталось: ${attemptsLeft}`;
         feedback.textContent = 'Слишком большое число.';
         const text = document.getElementById("textField");
         text.style.display = "block";
         setTimeout(function() {
             text.style.display = "none";
         }, 3400);
     } else {
         attemptsLeft--;
         attempts.textContent = `Сколько попыток осталось: ${attemptsLeft}`;
         feedback.textContent = 'Слишком мелкое число.';
         const text = document.getElementById("textField");
         text.style.display = "block";
         setTimeout(function() {
             text.style.display = "none";
         }, 3400);
     }

     if (attemptsLeft === 0) {
         feedback.textContent = `Вам не повезло от слова совсем! Вот ответ: ${randomNumber}.`;
         attempts.textContent = '';
         setTimeout(resetGame, 2000);
     }
    }

    function resetGame() {
        if (confirm('Play again?')) {
            document.getElementById('feedback').textContent = '';
            document.getElementById('attempts').textContent = '';
            document.getElementById('guessInput').value = '';
        }
    }
