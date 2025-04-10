// javascript 기초편편

// 자료형 : 객체 리터럴
let A_score = {
    name : 'A',
    korean : 100,
    english : 95,
    math : 80,
    science : 70
};

function print_score(score) {
    const {name,korean,english,math,science} = score;
    console.log(name + korean + english + math + science);
}

print_score(A_score);

// ==은 값이 같으면, ===은 값과 자료형이 모두 같으면 true 반환
console.log("3"==3);
console.log("3"===3);

// bool연산
// &&(AND) : 가장 왼쪽부터 비교해 false인것을 반환
// ||(OR) : 가장 왼쪽부터 비교해 true인것을 반환
// 해당되는 값 없다면 가장 오른쪽 반환
// 주의) bool연산자에서 undefined, null, 0도 거짓으로 판단
console.log(3 && "Hello" && 0 && "cat" && null);

// prompt()
/*
prompt("message(사용자에게 표시될 메시지)","default(입력 상자에 표시될 기본값)");
let num = prompt("당신은 멋사 몇기입니까?");
console.log(num);
*/

// 실습
/*
let num2 = prompt("1~100 숫자를 입력하세요");
num2 = parseInt(num2);
if (num2%2==0) {
    console.log("당신의 숫자는 짝수입니다");
} else {
    console.log("당신의 숫자는 홀수입니다");
}
*/

const numbers = [1,2,3,4,5,6,7,8,9,10];
const even_numbers = [];


for(let num of numbers) {
    if (num%2==0) {
        even_numbers.push(num);
    }
}

console.log(even_numbers);

even_numbers.unshift(); //맨앞에추가
even_numbers.splice(2,0,5); // 삽입(추가할 인덱스, 삭제할 인덱스, 추가할 값)
console.log(even_numbers);

// 구구단
function gugudan() {
    for (let i=1; i<9; i++) {
        console.log(`3 * ${i} =`,3*i);
    }
}
gugudan();


// 상수판단
const input = prompt("숫자를 입력하세요");
const number = parseInt(input);
const isPrime = (num) => {
    for (let i=2; i*i<=num; i++) {
        if (num%i == 0) return false;
    }
    return true;
}

console.log(isPrime(number)? '소수입니다' : '소수가 아닙니다');


// spread
const lion = {
    name : '사자'
};
const bravelion = {
    ...lion,
    attribute : 'brave'
};
const braveyellowlion = {
    ...bravelion,
    color : 'yellow'
};