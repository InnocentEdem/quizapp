const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById( "finalScore");
const mostRecentScore1 = localStorage.getItem('mostRecentScore1');

const highScores1 = JSON.parse(localStorage.getItem("highScores1")) || [];
const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore1;

username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = e =>{
    e.preventDefault();
    const score = {
        score: mostRecentScore1,
        name: username.value
    };
    highScores1.push(score);
    highScores1.sort((a,b) =>b.score - a.score);
    highScores1.splice(5);
    localStorage.setItem("highScores1", JSON.stringify(highScores1));
    window.location.assign("./")
};