// console.log("후츠릿 짱");

// 변수
// const username = "후츠릿";
let username = "후츠릿";

username = "신수진";

console.log("username", username);

// 데이터 타입
const num = 10; // number
console.log("🚀 ~ num:", num, typeof num);

const str = "안녕하세요"; // string
console.log("🚀 ~ str:", str, typeof str);

const bool = true;
console.log("🚀 ~ bool:", bool, typeof bool);

const bool2 = "true"; // string
// bool2의 데이터타입은?
console.log("🚀 ~ bool2:", bool2, typeof bool2);

const empty = null;
console.log("🚀 ~ empty:", empty);

let user; // 변수 선언
console.log("🚀 ~ user:", user);

// 함수

// 함수를 정의, 선언
// function greeting() {
//   // 실행할 로직
//   console.log("안녕하세요, 임은혜님!");
// }

const greeting = (username2) => {
  // 실행할 로직
  console.log(`안녕하세요, ${username2}님!`);
  // console.log("안녕하세요, ", username, "님!")
};

// 함수를 호출
greeting();
// greeting("임은혜");
// greeting("김완수");
// greeting("김태희");
// greeting("송혜진");

// 미션: 콘솔에 "Hello world"텍스트 출력하는 함수 정의, 실행

// 함수 입력과 출력
// const add = (num1, num2) => {
//   return num1 + num2;
// };

const add = (num1, num2) => num1 + num2;

// const doubleSum = (num) => {
//   return num * 2;
// };

// 미션: doubleSum함수 축약
const doubleSum = (num) => num * 2;

const sum = add(10, 20);
console.log("🚀 ~ sum:", sum); // 30

const result = doubleSum(sum);
console.log("🚀 ~ result:", result); // 60

const upperString = (str) => {
  console.log("리턴 전");
  return str.toUpperCase();
};

console.log("대문자 변환", upperString("name"));
// console.log("대문자 변환", upperString("dkasjdklfdkj"));
