/*

*/

button.addEventListener("click", function () {
  check();
});

function stopTimer() {
  clearInterval(countdownTimer);
  document.getElementById("countdown").innerHTML = "Buzz Buzz";

}
var seconds = 15;

function secondPassed() {
  var minutes = Math.round((seconds - 30) / 60);
  var remainingSeconds = seconds % 60;
  if (remainingSeconds < 10) {
    remainingSeconds = "0" + remainingSeconds;
  }
  document.getElementById("countdown").innerHTML =
    minutes + ":" + remainingSeconds;
  if (seconds == 0) {
    clearInterval(countdownTimer);
    document.getElementById("countdown").innerHTML = "Buzz Buzz";
    check();
  } else {
    seconds--;
  }
}

var countdownTimer = setInterval("secondPassed()", 1000);
var maxQuestions = 3;
var randQuestions = Math.floor(Math.random() * maxQuestions);
/*
var quizQuestions = [{
  "question": `In "Legend of Zelda: Ocarina of Time", using a gameshark, players can battle...`,
  "choice": ["An Arwing from Star Fox", "Princess Zelda", "Mario"],
  "correct": 0
}, {
  "question": `Prior to Tim Allens acting career, he was a "successful"...`,
  "choice": ["Smooth Jazz musician", "Drug dealer", "Blacksmith"],
  "correct": 1
}, {
  "question": `The first rap song to reach No. 1 on the pop charts was...`,
  "choice": [`"Who Let The Dogs Out" by Baha Men`, `"Thong Song" by Sisco`, `"Ice Ice Baby" by Vanilla Ice`],
  "correct": 2 
}, {
  "question": `The Sony Playstation was originally intended as...`,
  "choice": ["A game system for young children", "A virtual reality movie player", "A cd add-on for the Nintendo 64"],
  "correct": 2
}, {
  "question": `The "Legend of Zelda: Ocarina of Time" was originally inspired by which popular 90's tv show?`,
  "choice": ["Felix the Cat", "Twin Peaks", "Reading Rainbow"],
  "correct": 1
}, {
  "question": `Who loves orange soda?`,
  "choice": ["I do", "OJ Simpson", "Kel Kimble"],
  "correct": 2
}, ]

for (var i = 0; i < maxQuestions; i++) {
  
}
*/
function check() {
  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var correct = 0;

  if (question1 == "correct") {
    correct++;
  }
  if (question2 == "correct") {
    correct++;
  }
  if (question3 == "correct") {
    correct++;
  }

  var messages = ["Keep studying", "Try Again", "That's alright"];

  var range;
  if (correct < 1) {
    range = 2;
  }
  if (correct > 0 && correct < 3) {
    range = 1;
  }
  if (correct > 2) {
    range = 0;
  }

  document.getElementById("after_submit").style.visibility = "visible";
  document.getElementById("message").innerHTML = messages[range];
  document.getElementById("number_correct").innerHTML = `You got ${correct} correct!`;

  stopTimer();
}