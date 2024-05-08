var bubble = document.querySelector(".bubble");
var section = document.querySelector(".section");
var hitVal = document.querySelector("#hit");
var score = document.querySelector("#score");
var time = document.querySelector("#timer");

section.innerHTML = `<h1>Click anywhere to start</h1>`
section.style = "display: flex; justify-content: center; align-items: center;"
function b() {
  var clutter = "";

  for (var i = 1; i < 176; i++) {
    var num = Math.floor(Math.random() * 10);
    clutter = clutter + `<div class = "bubble" value = "${num}">${num}</div>`;
  }
  section.innerHTML = clutter;
  section.style = "overflow: hidden; flex-wrap: wrap; display: flex;";
}

function Score() {
  var points = 10;
  var smash = refresh();

  function handleClick(dets) {
    var match = parseInt(dets.target.textContent);
    console.log("match:", match);

    if (smash == match) {
      points = points + 10;

      score.textContent = points;
    } else {
      points = points - 10;
      score.textContent = points;
    }

    setTimeout(() => {
      smash = refresh();
      hitVal.textContent = smash;
      console.log("smash:", smash);
      b();
    }, 100);
    if (!start) {
      timer();
    }
  }

  function refresh() {
    return Math.floor(Math.random() * 10);
  }
  section.addEventListener("click", handleClick);

  setTimeout(function () {
    console.log("Game over!");
    section.removeEventListener("click", handleClick);

    gameOver();
    // Remove click event listener
  }, 60000); // Stop the game after 60 seconds (adjust as needed)
}

Score();
var t = 60;
var start;
function timer() {
  start = setInterval(function () {
    t = t - 1;
    if (t < 60 && t >= 0) {
      time.textContent = t;
    } else {
      clearInterval(timer);
      section.innerHTML = `<h1>Game Over</h1>`;
      section.style =
        "align-items: center; justify-content: center; display: flex;";
    }
  }, 1000);
}
