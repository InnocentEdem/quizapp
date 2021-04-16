const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById( "finalScore");
const mostRecentScore2 = localStorage.getItem('mostRecentScore2');

const highScores = JSON.parse(localStorage.getItem("highScores2")) || [];
const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore2;

username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = e =>{
    e.preventDefault();
    const score = {
        score: mostRecentScore2,
        name: username.value
    };
    highScores.push(score);
    highScores.sort((a,b) =>b.score - a.score);
    highScores.splice(5);
    localStorage.setItem("highScores2", JSON.stringify(highScores));
    window.location.assign("./")};