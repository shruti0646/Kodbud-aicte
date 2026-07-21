const paragraphs = [
"JavaScript is a powerful programming language used to create interactive websites and web applications.",
"Learning web development requires practice, patience and continuous improvement of coding skills.",
"Technology is changing the world rapidly and developers are creating innovative solutions every day."
];
let startTime;
let currentParagraph;
const paragraph =
document.getElementById("paragraph");
const inputText =
document.getElementById("inputText");
const startBtn =
document.getElementById("startBtn");
const submitBtn =
document.getElementById("submitBtn");
const result =
document.getElementById("result");

// Start Test
startBtn.addEventListener("click",()=>{
currentParagraph =
paragraphs[Math.floor(Math.random()*paragraphs.length)];
paragraph.innerText=currentParagraph;
inputText.value="";
inputText.disabled=false;
inputText.focus();
startTime=new Date().getTime();
result.innerHTML="";
});
// Submit Test
submitBtn.addEventListener("click",()=>{
let endTime=new Date().getTime();
let timeTaken =
(endTime-startTime)/1000/60;
let typedText=inputText.value;
// Calculate words
let words =
typedText.trim().split(/\s+/).length;
let wpm =
Math.round(words/timeTaken);

// Calculate errors
let errors=0;
for(let i=0;i<typedText.length;i++){
    if(typedText[i] !== currentParagraph[i]){
        errors++;
    }
}
result.innerHTML=
`
<h3>Result</h3>
<p>Speed: ${wpm} WPM</p>
<p>Errors: ${errors}</p>
`;
inputText.disabled=true;


});
