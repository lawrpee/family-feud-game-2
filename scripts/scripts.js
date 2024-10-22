let team1Score = 0;
let team2Score = 0;
let countdown;
let timer;

document.querySelectorAll('.flipbox').forEach(flipbox => {
    flipbox.addEventListener('click', () => {
        if (!flipbox.classList.contains('revealed')) {
            flipbox.classList.add('revealed');
            flipbox.textContent = flipbox.getAttribute('data-answer');
            const points = parseInt(flipbox.getAttribute('data-points'));
            // Add points to the appropriate team (for simplicity, we'll add to team 1)
            team1Score += points;
            document.getElementById('team1-score').textContent = team1Score;
        }
    });
});

function startTimer() {
    const countdownElement = document.getElementById('countdown');
    let timeRemaining = parseInt(countdownElement.textContent);
    timer = setInterval(() => {
        if (timeRemaining > 0) {
            timeRemaining--;
            countdownElement.textContent = timeRemaining;
        } else {
            clearInterval(timer);
            alert('Time is up!');
        }
    }, 1000);
}

function resetGame() {
    team1Score = 0;
    team2Score = 0;
    document.getElementById('team1-score').textContent = team1Score;
    document.getElementById('team2-score').textContent = team2Score;
    document.querySelectorAll('.flipbox').forEach(flipbox => {
        flipbox.classList.remove('revealed');
        flipbox.textContent = flipbox.getAttribute('data-answer').charAt(0);
    });
    clearInterval(timer);
    document.getElementById('countdown').textContent = '60';
}
