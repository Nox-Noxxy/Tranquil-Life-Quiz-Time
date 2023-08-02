
document.addEventListener("DOMContentLoaded", function() {
  let buttons = document.getElementsByTagName("button");

  for (let button of buttons) {
    button.addEventListener("click", function() {
      if (this.getAttribute("data-type") === "submit") {
        checkAnswer();

      } else {
        let quizGameType = this.getAttribute("data-type");
        runGame(quizGameType)
      }
    })
  }

  runGame();
})



let myQuestions = [
  //Quiz questions and answers
  {
    questions: 'All types of yoga help with weight lose?',
    answers: false
  },

  {
    questions: 'Kundalini is influenced by Shaktism and Tantra schools of Hinduism?',
    answers: true
  },

  {
    questions: 'Iyengar yoga helps with good posture?',
    answers: false
  },

  {
    questions: 'Vinyasa yoga links yoga poses together with flow and co-ordination?', answers: true,
  },

  { questions: 'Power yoga focuses on breathing?', answers: false },

  { questions: 'Hatha yoga enhances balance?', answers: true },
  { questions: 'Ashtanga yoga involves chanting?', answers: false },

  { questions: 'Iyengar yoga has same day effects?', answers: false },
];


var questions;
var answers;
var score = 0;
var countScore = 0;

/**
The main game "loop" called when script is first loaded
*and after the user's answer has been processed
*/

 function runGame() {
  //picks random question
  let myQuestions =[];
   for (let i = 0; i < myQuestions.length; i++) {
     myQuestions.push()
   }
   
 return myQuestions;
 }

let result = myQuestions[Math.floor(Math.random()* myQuestions.length)];
let theQuestion = result.questions;

console.log(result);
runGame();


/** checks if userAnswer is correct */
function checkAnswer() {
   let txt = document.getElementById('answer-box').value;
  let answerValue= result.answers;
  let finalCal = txt === answerValue;
  finalCal;
  
  if (txt.value <= result) {
    
alert('great');

  } else {
    alert("awwww");
  } 
console.log(txt == answerValue);  
}
checkAnswer();


 
function qandA (){
 let inA = result.answers;
 inA;
}
qandA();


function displayQuestion() {

document.getElementById('operand1').innerHTML= result.questions;

}
displayQuestion(); 

function getIt(){
let userValue = document.getElementById('answer-box').value;
let finalValue = userValue;
  finalValue;
}
getIt();

