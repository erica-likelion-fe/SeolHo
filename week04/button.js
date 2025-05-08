// 요소 선택
const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");

let count = 0;

// 증가
increaseBtn.addEventListener("click", () => { //click 외에도 mouseover 등의 여러 이벤트가 있음음
    count++;
    countDisplay.textContent = count;
});

// 감소
decreaseBtn.addEventListener("click", () => {
    count--;
    countDisplay.textContent = count;
})