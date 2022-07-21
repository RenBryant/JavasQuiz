var questionIndex = 0;
const startButton = document.getElementById('start');
const quizQuestion = document.getElementById('quizQuestion');
const timer = document.getElementById('timer')
const answers = document.getElementById('answers')
const scoresList = document.getElementById('scoresList')
const initials = document.getElementById('initials')
const clearScores = document.getElementById('clear')

var timeId;

var time = 300;

function quizEnd(){
    clearInterval(timeId)

    var endScreen = document.getElementById('end-screen')
    endScreen.removeAttribute('class')

    var finalScore = document.getElementById('final-score')
    finalScore.textContent = time;

    var questions = document.getElementById('questions')
    questions.setAttribute('class', 'hide')
}

function buildQuiz(){
    timer.textContent = time;

    timeId = setInterval(TimeDown, 1000)
    showQuestion();
}

function showQuestion(){
    var currentQ = myQuestions[questionIndex];
    
    quizQuestion.textContent = currentQ.question;
    answers.innerHTML = ''
    currentQ.answers.forEach(function(answer){
        var answerBtn = document.createElement('button')
        answerBtn.setAttribute("value", answer)
        answerBtn.textContent = answer;
        answerBtn.onclick = answerClick;
        answers.appendChild(answerBtn)
        
    })
}

function answerClick(){
    console.log (this.value)
    if(this.value !== myQuestions[0].answer){
        time = time -15
        timer.textContent = time
    }
        questionIndex ++
    
    if(questionIndex === myQuestions.length){
        quizEnd()
    } else {
        showQuestion()
    }

}


function showResults(){
    buildQuiz();
    submitButton.addEventListener('click', showResults);
    const initialsValue = initials.value;
    let score = JSON.parse(localStorage.getItem("codeQuiz")) ||[]
    score.push({user: initials, score: timerCounter})

    localStorage.setItem ('codeQuiz'. JSON.stringify(score))
    
}

const myQuestions = [
    {
        question: "How much is a Stack in Minecraft?",
        answers: ["25","100","64"],
        correctAnswer: "64"
    },
    {
        question: "What is an animal that you can tame?",
        answers: ["spider","wolf","cow"],
        correctAnswer: "wolf"
    },
    {
        question: "What is needed to enchant?",
        answers: ["lapis lazuli","redstone","diamond"],
        correctAnswer: "lapis lazuli"
     },
     {
         question: "How many logs are needed to craft a crafting table?",
         answers: ["4 planks not logs","4 logs","2 logs"],
         correctAnswer: "4 planks not logs"
     },
     {
        question: "Who is the #1 Potato Farmer in Skyblock?",
        answers: ["Dream", "Technoblade", "Squid"],
        correctAnswer: "Technoblade"
     }

]

function highScores() {
 
    let score = JSON.parse(localStorage.getItem("codeQuiz")) ||[]
    for (let i = 0; i < score.length; i++) {
        for(let j=0; j <score.length; j++) {
         if(score[i].score > score[j].score){
             let temp = score[j]
             score[j] = score[i]
             score[i] = temp
         }
        }
    }

listScores.innerHTML = '';
for (let i = 0; i < userScore.length; i++)  {
    let li = document.createElement('li')
    let text = document.createTextNode(`${score[i].user} - ${score[i].score}`)
    li.appendChild(text)
    listScores.appendChild(li)
}


function clearScores() {
localStorage.removeItem ('codeQuiz')
scoresList.innerHTML = '';
}

function restart(){
    window.location.reload();
}

function TimeDown() {
    time = time - 1;
    timer.textContent = time;
    if (time < 300) {
        timer.innerHTML = time;
    }
    if (time < 1) {
        restart()
        alert('Time is up! Press ok to restart the quiz.')
    }
}
}


startButton.addEventListener('click', buildQuiz)