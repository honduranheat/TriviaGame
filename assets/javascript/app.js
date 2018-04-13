/*

*/

button.addEventListener("click", function() {
  check();
});

function stopTimer() {
  clearInterval(countdownTimer);
  document.getElementById("countdown").innerHTML = "Buzz Buzz";
  
}
var seconds = 10;
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
