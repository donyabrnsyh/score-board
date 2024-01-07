const p1Button = document.querySelector("#p1-button");
const p2Button = document.querySelector("#p2-button");
const p1Display = document.querySelector("#p1-display");
const p2Display = document.querySelector("#p2-display");
const resetBtn = document.querySelector("#reset");
const winPoinOption = document.querySelector("#winpoint");

let p1Score = 0;
let p2Score = 0;
let winScore = 3; //harus mengikuti select option terbawah
let gameOver = false;

function reset() {
  gameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.innerText = 0;
  p2Display.innerText = 0;
}

p1Button.addEventListener("click", () => {
  if (!gameOver) {
    p1Score += 1;
    if (p1Score === winScore) {
      gameOver = true;
    }

    p1Display.innerText = p1Score;
  }
});

p2Button.addEventListener("click", () => {
  if (!gameOver) {
    p2Score += 1;
    if (p2Score === winScore) {
      gameOver = true;
    }

    p2Display.innerText = p2Score;
  }
});

resetBtn.addEventListener("click", reset);

winPoinOption.addEventListener("change", function () {
  winScore = parseInt(this.value);
  reset();
});
