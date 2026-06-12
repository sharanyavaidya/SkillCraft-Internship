const quizData = [
{
    question: "Which language is used for web page structure?",
    options: ["HTML", "CSS", "Java", "Python"],
    answer: "HTML"
},
{
    question: "Which CSS property changes text color?",
    options: ["font-size", "background", "color", "border"],
    answer: "color"
},
{
    question: "Which company developed Java?",
    options: ["Google", "Microsoft", "Sun Microsystems", "Apple"],
    answer: "Sun Microsystems"
},
{
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "#", "<!-- -->", "**"],
    answer: "//"
},
{
    question: "What does CSS stand for?",
    options: [
        "Computer Style Sheets",
        "Cascading Style Sheets",
        "Creative Style System",
        "Colorful Style Sheets"
    ],
    answer: "Cascading Style Sheets"
}
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = "";

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion(){

    const current = quizData[currentQuestion];

    questionEl.textContent = current.question;
    optionsEl.innerHTML = "";
    selectedAnswer = "";

    current.options.forEach(option => {
        const btn = document.createElement("button");
        btn.classList.add("option");
        btn.textContent = option;

        btn.addEventListener("click", () => {

            document.querySelectorAll(".option")
            .forEach(btn => btn.classList.remove("selected"));

            btn.classList.add("selected");
            selectedAnswer = option;
        });

        optionsEl.appendChild(btn);
    });
}

nextBtn.addEventListener("click", () => {

    if(selectedAnswer === ""){
        alert("Please select an answer!");
        return;
    }

    if(selectedAnswer === quizData[currentQuestion].answer){
        score++;
    }

    currentQuestion++;

    if(currentQuestion < quizData.length){
        loadQuestion();
    } else {
        document.getElementById("quiz-box").classList.add("hidden");
        document.getElementById("result").classList.remove("hidden");

        document.getElementById("score").textContent =
        `Your Score: ${score} / ${quizData.length}`;
    }
});

loadQuestion();