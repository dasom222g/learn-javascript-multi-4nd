// 조건문
const score = 85;

// if (score >= 60) {
//   // 조건식이 true면 실행할 로직
//   console.log("✅합격");
// }

// if (score >= 60) {
//   // 조건식이 true면 실행할 로직
//   console.log("✅합격");
// } else {
//   // 조건식이 false인 경우 실행할 로직
//   console.log("❌불합격");
// }

// score >= 60 ? console.log("✅합격") : console.log("❌불합격");

console.log(score >= 60 ? "✅합격" : "❌불합격");

console.log("조건문 끝!");

// else if
let grade = "F";
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else {
  grade = "D";
}

console.log(`학생의 등급은 ${grade}등급 입니다.`);

// false로 간주하는 것들
if ("") {
  console.log("true입니다");
} else {
  console.log("false입니다");
}

const userInput = ""; // 사용자의 입력값

if (!userInput) {
  // userInput의 값이 false면
  console.log("값을 입력해주세요");
}
