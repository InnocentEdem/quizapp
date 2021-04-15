const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"))
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull")
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestion = [];
let questions=[];
fetch("questions.json"). then( res => {
    return res.json();
}).then(loadedQuestions => {
    questions = loadedQuestions;
    startGame();
});

 
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = ()=>{
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion(); 
};

getNewQuestion=function(){
    if(availableQuestions === 0 || questionCounter===MAX_QUESTIONS){
        localStorage.setItem("mostRecentScore", score) 
        return window.location.assign("/end.html");
        console.log(score)
    }

    questionCounter++;
    progressText.innerText= `Question ${questionCounter} / ${MAX_QUESTIONS}`;
    let progressPercent=(questionCounter/MAX_QUESTIONS)*100;
    progressBarFull.style.width = `${progressPercent}%`
   
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion=availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
    const number = choice.dataset["number"];
    thisChoices = "choice"+number;
    console.log(thisChoices);
    choice.innerText = currentQuestion[thisChoices];});
    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click",e => {
        if (!acceptingAnswers) return;
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        let classToApply = "incorrect";
        if (selectedAnswer==currentQuestion.answer){
            classToApply="correct";
            score = score + CORRECT_BONUS;
           
            scoreText.innerText = score;
            
        }
        selectedChoice.parentElement.classList.add(classToApply);
        setTimeout(()=>{

            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();}, 1000)


    })
})
incrementScore = num => {
    
};

