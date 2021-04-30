function questionOne() {
  var answerOne = prompt("1+1=");
  if (answerOne == 2) {
  alert("Correct Answer");
  } else {
  alert("Incorrect Answer, try again.");
  }
}
function questionTwo() {
  var answerTwo = prompt("2+3=");
  if (answerTwo == 5) {
  alert("Correct Answer");
  } else {
  alert("Incorrect Answer, try again.");
  }
}
function questionThree() {
  var answerThree = prompt("7+5=");
  if (answerThree == 12) {
    alert("Correct Answer");
  } else {
    alert("Incorrect Answer, try again.");
  }
}
function questionFour() {
  var answerFour = prompt("4+4=");
  if (answerFour == 8) {
    alert("Correct Answer");
  } else {
    alert("Incorrect Answer, try again.");
  }
}
function questionFive() {
  var answerFive = prompt("10+3=");
  if (answerFive == 13) {
    alert("Correct Answer");
  } else {
    alert("Incorrect Answer, try again.");
  }
}
function questionSix() {
  var answerSix = prompt("1-1=");
  if (answerSix == 0) {
  alert("Correct Answer");
  } else {
  alert("Incorrect Answer, try again.");
  }
}
function questionSeven() {
  var answerSeven = prompt("4-2=");
  if (answerSeven == 2) {
  alert("Correct Answer");
  } else {
  alert("Incorrect Answer, try again.");
  }
}
function questionEight() {
  var answerEight = prompt("9-5=");
  if (answerEight == 4) {
    alert("Correct Answer");
  } else {
    alert("Incorrect Answer, try again.");
  }
}
function questionNine() {
  var answerNine = prompt("6-3=");
  if (answerNine == 3) {
    alert("Correct Answer");
  } else {
    alert("Incorrect Answer, try again.");
  }
}
function questionTen() {
  var answerTen = prompt("14-5=");
  if (answerTen == 9) {
    alert("Correct Answer");
  } else {
    alert("Incorrect Answer, try again.");
  }
}
function questionEleven() {
  var answerEleven = prompt("1x1=");
  if (answerEleven == 1) {
  alert("Correct Answer");
  } else {
  alert("Incorrect Answer, try again.");
  }
}
function questionTwelve() {
  var answerTwelve = prompt("3x3=");
  if (answerTwelve == 9) {
  alert("Correct Answer");
  } else {
  alert("Incorrect Answer, try again.");
  }
}
function questionThirteen() {
  var answerThirteen = prompt("5x2=");
  if (answerThirteen == 10) {
    alert("Correct Answer");
  } else {
    alert("Incorrect Answer, try again.");
  }
}
function questionFourteen() {
  var answerFour = prompt("7x7=");
  if (answerFour == 49) {
    alert("Correct Answer");
  } else {
    alert("Incorrect Answer, try again.");
  }
}
function questionFifteen() {
  var answerFifteen = prompt("10x9=");
  if (answerFifteen == 90) {
    alert("Correct Answer");
  } else {
    alert("Incorrect Answer, try again.");
  }
}
function questionSixteen() {
  var answerSix = prompt("6/2=");
  if (answerSix == 3) {
  alert("Correct Answer");
  } else {
  alert("Incorrect Answer, try again.");
  }
}
function questionSeventeen() {
  var answerSeven = prompt("8/4=");
  if (answerSeven == 2) {
  alert("Correct Answer");
  } else {
  alert("Incorrect Answer, try again.");
  }
}
function questionEighteen() {
  var answerEighteen = prompt("10/5=");
  if (answerEighteen == 2) {
    alert("Correct Answer");
  } else {
    alert("Incorrect Answer, try again.");
  }
}
function questionNineteen() {
  var answerNine = prompt("7/7=");
  if (answerNine == 1) {
    alert("Correct Answer");
  } else {
    alert("Incorrect Answer, try again.");
  }
}
function questionTwenty() {
  var answerTen = prompt("15/3=");
  if (answerTen == 5) {
    alert("Correct Answer");
  } else {
    alert("Incorrect Answer, try again.");
  }
}
function testGrade() {
  var grade = prompt("What grade did you get?");
  if (grade >=6) {
  alert("You passed");
  } else {
  alert("You failed");
  }
}
function progressOne(){
  var image = document.getElementById('imageOne')
  if (image.src.match("assets/25_circle2.jpeg")) {
    image.src = "assets/24_circle.jpeg"
  } else {
    image.src = "assets/25_circle2.jpeg"
  }
}
function progressTwo(){
  var image = document.getElementById('imageTwo')
  if (image.src.match("assets/25_circle2.jpeg")) {
    image.src = "assets/24_circle.jpeg"
  } else {
    image.src = "assets/25_circle2.jpeg"
  }
}
function progressThree(){
  var image = document.getElementById('imageThree')
  if (image.src.match("assets/25_circle2.jpeg")) {
    image.src = "assets/24_circle.jpeg"
  } else {
    image.src = "assets/25_circle2.jpeg"
  }
}
function progressFour(){
  var image = document.getElementById('imageFour')
  if (image.src.match("assets/25_circle2.jpeg")) {
    image.src = "assets/24_circle.jpeg"
  } else {
    image.src = "assets/25_circle2.jpeg"
  }
}
function myNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "menu") {
    x.className += " responsive";
  } else {
    x.className = "menu";
  }
}
