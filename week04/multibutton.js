// css의 .food 선택자를 갖고 있는 요소들을 배열 형태로 불러온다.
const foodBtn = document.querySelectorAll(".food");
const submitBtn = document.querySelector(".submit");

submitBtn.disabled = true; // 일단 제출버튼 비활성화화

foodBtn.forEach((btn) => { // btn은 임시 파라미터명
    btn.addEventListener("click", () => {
        // 버튼이 눌렸을때 파라미터의 뒤에 selected 클래스를 넣어줘서, button.selected 스타일이 적용됨
        // classList.toggle : 클래스가 존재한다면 제거하고 false 반환/존재하지 않으면 추가하고 true반환환.
        btn.classList.toggle("selected");
        updateSubmit();
    });
});

function updateSubmit() {
    const selected = document.querySelectorAll(".food.selected");
    const isActive = selected.length > 0; // selected가 하나라도 있으면 true, 없으면 false

    submitBtn.disabled = !isActive; // false면 버튼 바활성화off, true면 버튼 비활성화on

    // add : 지정한 클래스값 추가
    // remove : 지정한 클래스값 제거
    if (!submitBtn.disabled) submitBtn.classList.add("selected");
    else submitBtn.classList.remove("selected");
};

submitBtn.addEventListener("click", () => {
    const selected = document.querySelectorAll(".food.selected");
    // 불러온 selected 내의 버튼 요소들의 text를 가져와 저장하는 작업(ex. 치킨, 피자)
    const selectedFoods = Array.from(selected).map(btn => btn.textContent);

    console.log("선택한 음식:", selectedFoods);
});