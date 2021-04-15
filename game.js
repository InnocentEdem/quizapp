const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"))

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestion = [];
let questions=[ 
{
question:"Evaluate 3*9^(1/2)",
choice1: "5",
choice2: "9",
choice3: "7.5",
choice4: "18",
answer: 2
},
{
question:"what is the area of a circle of radius r, and diameter d?",
choice1: "pi*(d^2)/4",
choice2: "2*(pi/2)*r^2",
choice3: "pi*r^2",
choice4: "All the above",
answer: 2
},
{
question:"Find the diagonal length of a square of breadth 1 unit.",
choice1: "2",
choice2: "4",
choice3: "2^(1/2)",
choice4: "3",
answer:3
},
{
question:"Evaluate 3-2*4+7",
choice1: "11",
choice2: "2",
choice3: "6",
choice4: "9",
answer:2}
];
 
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
        return window.location.assign("/end.html");
    }
    questionCounter++;
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
        }
        selectedChoice.parentElement.classList.add(classToApply);
        setTimeout(()=>{

            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();}, 1000)


    })
})
 startGame();
