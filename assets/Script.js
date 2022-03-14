
const submitButton = document.getElementById('submit');
const quizContainer = document.getElementById('quiz');

<><text>Time: <text id="time00">300</text></text><br /></>

var e = 300;
function buildQuiz(){

}

function showResults(){
    buildQuiz();
    submitButton.addEventListener('click', showResults);
}

const myQuestions = [
    {
        question: "How much is a Stack in Minecraft?",
        answers: {
            a: "25",
            b: "100",
            c: "64"
        },
        correctAnswer: "c"
    },
    {
        question: "What is an animal that you can tame?",
        answers: {
            a: "Spider",
            b: "wolf",
            c: "cow"
        },
        correctAnswer: "b"
    },
    {
        question: "What is needed to enchant?",
        answers: {
            a: "lapis lazuli",
            b: "redstone",
            c: "diamond"
        },
        correctAnswer: "a"
     },
     {
         question: "How many logs are needed to craft a crafting table?",
         answers: {
             a: "trick question 4 planks not logs",
             b: "4 logs",
             c: "2 logs"
         },
         correctAnswer: "a"
     },

]

function Timer00() {
    e = e - 1;
    if (c < 300) {
        time00.innerHTML = c;
    }
    if (c < 1) {
        window.clearInterval(update);
    }
}

function restart(){
    window.location.reload();
}

update = setInterval("timer00()", 1000);