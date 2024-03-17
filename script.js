document.addEventListener('DOMContentLoaded', function() {
    const clickButton = document.getElementById('clickButton');
    const scoreDisplay = document.getElementById('score');
    const timerDisplay = document.getElementById('timer');
    let score = 0;
    let timeLeft = 10;

    function updateScore() {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
    }

    function updateTimer() {
        timerDisplay.textContent = `Time Left: ${timeLeft}`;
        if (timeLeft === 0) {
            endGame();
        } else {
            timeLeft--;
            setTimeout(updateTimer, 1000);
        }
    }

    function endGame() {
        clickButton.removeEventListener('click', updateScore);
        clickButton.disabled = true;
        alert(`yasss bitchh you click that button ${score} times`);
    }

    clickButton.addEventListener('click', updateScore);
    updateTimer();
});