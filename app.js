const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

const TIE = 0;
const WIN = 1;
const LOST = 2;

const rockBtn = document.getElementById("Rock");
const paperBtn = document.getElementById("Paper");
const scissorsBtn = document.getElementById("Scissors");
const resultText = document.getElementById("start-text");
const userImage = document.getElementById("userImage");
const machineImage = document.getElementById("machineImage");

rockBtn.addEventListener("click", () => {
  play(ROCK);
});

paperBtn.addEventListener("click", () => {
  play(PAPER);
});

scissorsBtn.addEventListener("click", () => {
  play(SCISSORS);
});

function play(userOption) {
  const machineOption = Math.floor(Math.random() * 3);
  const result = calcResult(userOption, machineOption);

  switch (result) {
    case TIE:
      resultText.innerHTML = "You have tied!";
      break;
    case WIN:
      resultText.innerHTML = "You win!";
      break;
    case LOST:
      resultText.innerHTML = "You lost!";
      break;
  }
}

function calcResult(userOption, machineOption) {
  if (userOption === machineOption) {
    return TIE;
  } else if (userOption === ROCK) {
    if (machineOption === PAPER) return LOST;
    if (machineOption === SCISSORS) return WIN;
  } else if (userOption === PAPER) {
    if (machineOption === SCISSORS) return LOST;
    if (machineOption === ROCK) return WIN;
  } else if (userOption === SCISSORS) {
    if (machineOption === ROCK) return LOST;
    if (machineOption === PAPER) return WIN;
  }
}
