const ans = Math.floor(Math.random() * 100) + 1;
let cnt = 10;
let num = prompt(`1~100 사이의 정수를 맞춰보세요 (남은 기회 : ${ans})`);

const compare_number = (num) => {
    if (num>ans) return 1;
    else if (num<ans) return 2;
    else return 3;
}

console.log(ans);


while (true) {
    const result = compare_number(num);

    if (result === 3) {
        alert(`축하합니다! 정답입니다 (남은 기회 : ${ans})`);
        break;
    }

    ans--;
    if (ans === 0) {
        alert("실패!");
        break;
    }

    if (result === 1) {
        num = prompt(`DOWN! (남은 기회 : ${ans})`);
        console.log("DOWN!");
    } else if (result === 2) {
        num = prompt(`UP! (남은 기회 : ${ans})`);
        console.log("UP!");
    }
}