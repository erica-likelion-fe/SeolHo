const confirmButton = document.getElementById("confirm");
const chanceDisplay = document.getElementById("chance");
const hintDisplay = document.getElementById("hint");

const ans = Math.floor(Math.random() * 100) + 1;
let count = 10;
let correct = false;

function compareNumber(guessNum, ansNum) {
    if (guessNum==ansNum) {
        correct = true;
        hintDisplay.textContent = "정답입니다! " + guessNum;
    }
    else if (guessNum>ansNum) {
        hintDisplay.textContent = guessNum + "⬆️ DOWN!";
        count--;
    }
    else {
        hintDisplay.textContent = guessNum + "⬇️ UP!";
        count--;
    }
};

confirmButton.addEventListener("click", () => {
    const guess = document.getElementById("guess").value;
    console.log("guess:",guess,"ans:",ans, correct, count);
    compareNumber(guess,ans);

    chanceDisplay.textContent = "남은 기회 :" + count;
});