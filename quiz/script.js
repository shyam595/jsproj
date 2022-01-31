const quizData=[
    {
        question: "Who is IRON MAN ?",
        a: "Robert Downey Jr",
        b: "Tony Stark",
        c: "Morgan Stark",
        d: "Eddard Stark",
        correct: "b"

    },
    {
        question: "Who is the best player in the world ?",
        a: "Cristiano Ronaldo",
        b: "Neymar Jr",
        c: "Lionel Messi",
        d: "Johan cryuff",
        correct: "c"

    },
    {
        question: "What is the Childhood name of Shahjahan?",
        a: "Khurram",
        b: "Salim",
        c: "Akbar",
        d: "Mohammed",
        correct: "a"

    },
    {
        question: "What is the title of Aurangajeb ?",
        a: "Alamgir",
        b: "Zinda peer",
        c: "Shahi Darvesh",
        d: "All the above",
        correct: "d"

    },
    {
        question: "who won the FIFA Best player of the year 2021 ?",
        a: "Robert Lewandoski",
        b: "Lionel Messi",
        c: "N'golo Kante",
        d: "Mohammed Salah",
        correct: "a"

    },
    {
        question: "Who rises in the East ?",
        a: "Ash",
        b: "Sun",
        c: "Moon",
        d: "Jupiter",
        correct: "b"

    },
    {
        question: "What is my name ?",
        a: "No idea",
        b: "goodbye",
        c: "shyam",
        d: "Mspn",
        correct: "d"

    }
]

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")

const submitBtn = document.getElementById("submit")

const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")

let score = 0

let currentQuestion = 0

function loadQuestion(){

    deselectAnswers()
    const currentQuizData = quizData[currentQuestion]

    questionEl.innerText = currentQuizData.question

    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers(){
    answerEls.forEach(answerEl=> answerEl.checked=false)
}

function getSelected(){
    let answer;

    answerEls.forEach(answerEl=>{
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    console.log(answer)
    return answer
}

loadQuestion()

submitBtn.addEventListener("click",()=>{

    const answer = getSelected()

    if(answer){
        if(answer === quizData[currentQuestion].correct){
            score++;
        }
        currentQuestion++

        if(currentQuestion<quizData.length){
            loadQuestion()
        }else{
            quiz.innerHTML = `
            <h2>
                You answered ${score}/${quizData.length} questions correctly
            </h2>
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})