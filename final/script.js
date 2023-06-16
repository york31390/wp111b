var secretNumber = Math.floor(Math.random() * 100) + 1;
var guessCount = 0;

function checkGuess() {
  var guess = parseInt(document.getElementById("guessInput").value);
  guessCount++;
  
  var result = document.getElementById("result");
  if (guess === secretNumber) {
    result.textContent = "恭喜！你猜對了！";
    result.style.color = "yellow";
    disableInput();
  } else if (guessCount === 10) {
    result.textContent = "遊戲結束！你用完了所有的猜測次數。";
    result.style.color = "red";
    disableInput();
  } else if (guess < secretNumber) {
    result.textContent = "太小了！";
    result.style.color = "green";
  } else {
    result.textContent = "太大了！";
    result.style.color = "green";
  }
  
  document.getElementById("guessInput").value = "";
}

function disableInput() {
  document.getElementById("guessInput").disabled = true;
  document.getElementsByTagName("button")[0].disabled = true;
}
