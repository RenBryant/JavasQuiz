var questionIndex = 0;
const startButton = document.getElementById('start');
const quizQuestion = document.getElementById('quizQuestion');
const timer = document.getElementById('timer')
const answers = document.getElementById('answers')
{/* <><text>Time: <text id="time00">300</text></text><br /></> */}

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

function saveScore(){
    var initials = document.getElementById('initials').value.trim()

    var highscores = JSON.parse(window.localstorage.getItem('highscores')) || [];

    var newScore = {
        score : time,
        intitals: initials
    }
    //highscores.push(newScore)
    //look up localstorage.setItem('','') expects two paramaters, first being the key, the second being the value
    //once you have saved to local storage then do a window.location change to the highscores page
    
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

   // else {
        questionIndex ++

    //}

    //arr = [1,2,3]  arr[arr.length - 1]
    
    if(questionIndex === myQuestions.length){
        quizEnd()
    } else {
        showQuestion()
    }

    //check for the user's answer 
        //if(this.value !== myQuestions[0].answer)
    //if the user's answer is wrong, subtract time
    //if the user's answer is correct, display next question (remember the questionIndex)
    //if at end of question list, call for end of quiz
}

function showResults(){
    buildQuiz();
    submitButton.addEventListener('click', showResults);
    
}
// something.createElement('button')

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
         answers: ["trick question 4 planks not logs","4 logs","2 logs"],
         correctAnswer: "trick question 4 planks not logs"
     },

]

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



startButton.addEventListener('click', buildQuiz)
