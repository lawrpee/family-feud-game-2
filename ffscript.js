let team1Score = 0;
let team2Score = 0;

document.querySelectorAll('.answer').forEach(answer => {
    answer.addEventListener('click', () => {
        if (!answer.classList.contains('revealed')) {
            answer.classList.add('revealed');
            const points = parseInt(answer.getAttribute('data-points'));
            // Add points to the appropriate team (for simplicity, we'll add to team 1)
            team1Score += points;
            document.getElementById('team1-score').textContent = team1Score;
        }
    });
});

function resetGame() {
    team1Score = 0;
    team2Score = 0;
    document.getElementById('team1-score').textContent = team1Score;
    document.getElementById('team2-score').textContent = team2Score;
    document.querySelectorAll('.answer').forEach(answer => {
        answer.classList.remove('revealed');
    });
}
