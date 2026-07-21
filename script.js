const questions = [

{
    question:"Which language is used for web styling?",
    options:["HTML","CSS","Python","Java"],
    answer:"CSS"
},

{
    question:"Which keyword is used to declare a variable in JavaScript?",
    options:["var","print","define","value"],
    answer:"var"
},
{
    question:"Which company developed JavaScript?",
    options:["Microsoft","Google","Netscape","Apple"],
    answer:"Netscape"
},
{
    question:"HTML stands for?",
    options:[
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyperlink Text Language",
        "Home Tool Markup Language"
    ],
    answer:"Hyper Text Markup Language"
}
];
let currentQuestion = 0;
let score = 0;
let selectedAnswer = "";
const questionBox = document.getElementById("question");
const optionsBox = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const result = document.getElementById("result");
function loadQuestion(){
    selectedAnswer="";
    let current = questions[currentQuestion];
    questionBox.innerHTML =
    current.question;
    optionsBox.innerHTML="";
    current.options.forEach(option=>{
        let button=document.createElement("button");
        button.innerText=option;
        button.classList.add("option");
        button.addEventListener("click",()=>{
            selectedAnswer=option;
            document.querySelectorAll(".option")
            .forEach(btn=>btn.classList.remove("selected"));
            button.classList.add("selected");
        });
        optionsBox.appendChild(button);
    });
}
nextBtn.addEventListener("click",()=>{
    if(selectedAnswer === questions[currentQuestion].answer){
        score++;
    }
    currentQuestion++;
    if(currentQuestion < questions.length){
        loadQuestion();
    }
    else{
        showResult();
    }
});
function showResult(){
    document.getElementById("quiz-box").style.display="none";
    result.innerHTML=
    `🎉 Your Score: ${score}/${questions.length}`;
}



loadQuestion();
