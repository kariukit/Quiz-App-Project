//for the quizz
var score=0;
var question=questions;
var questionIndex=0;

getquestionindex(){
    return question[questionIndex];
}
guess(answerEl) {
if(getquestionindex.iscorrect(answerEl)){
    score++;
}
questionIndex++;
}

isOver(){
    return questionIndex===question.length;
}

//for the questions
getquestion(text, choices, answer){
var textEl=text;
var choicesEl=choices;
var answerEl=answer;

iscorrect(choice){
    return answer===choice;
}
}

//the logic part where i want to display the question
function displayQuestion(){
if(quizz.isOver()){
showsScores();
}else{
    //this will display the questions
let questionEl=document.getElementById("question");
questionEl.innerHTML=quizz.getquestionindex().text;

//this will display the choices
let choices=quizz.getquestionindex().choices;

for(i=0; i<choices.length; i++){
let choiceEl=document.getElementById("choice"+i);
choiceEl.innerHTML=choices[i];
guess("btn"+i, choices[i]);

}
showProgress();
}
}

function guessed(id, guess){
    let button= document.getElementById(id);
    button.onclick= function(){
quizz.guess(guess);
displayQuestion();
    }
}

//showing the progress of the quizz
function showProgress(){
let currentQuestion=quizz.questionIndex+1;
let progressEl=document.getElementById("progress");
progressEl.innerHTML=
"question ${currentQuestion}";
}

//to show the score
function showScores(){
let quizzOverHTML=
'
<h1> congratulations. you finished the quizz</h1>
<h2 id="score"> you scored: ${quizz.score} out of ${quizz.question.length} </h2>
<div class=repeat-quizz>
<a href="index.html">repeat quizz</a>
<a href=high-scores>view high scores</a>
</div>
';

let quizzEl=document.getElementById("quizz);
quizzEl.innerHTML=quizzOverHTML;
}