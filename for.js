for (let i = 0; i < 5; i++) {
  console.log(`${i}번째 실행중..`);
}

// 함수 반복 실행

const students = ["김완수", "김태희", "송혜진", "신수진", "임은혜"];

const greeting = (username) => {
  console.log(`반갑습니다. ${username}님!`);
};

// for (let i = 0; i < students.length; i++) {
//   greeting(students[i]); // 5번 실행
// }

students.forEach((name, idx) => {
  greeting(name);
});

// 자주 사용되는 배열함수
const names = ["alice", "bob", "charlie", "david"];

// map: 기존 배열을 조작하여 새로운 배열을 리턴
const upperNames = names.map((name) => name.toUpperCase());
console.log("🚀 ~ upperNames:", upperNames);

// 미션: 각 이름뒤에 ⭐️이모지가 추가된 새로운 배열을 콘솔에 출력
const starNames = names.map((name) => `${name}⭐️`);
console.log("🚀 ~ starNames:", starNames);

// filter: 배열안의 요소들 중 조건을 만족하는 요소들로 새로운 배열 리턴
// 이름 글자수가 5자 이상인 요소
const filterNames = names.filter((name) => name.length >= 5);
console.log("🚀 ~ filterName:", filterNames);

// find: 배열안의 요소들 중 조건을 만족하는 첫번째 요소를 리턴 / 조건을 만족하는 요소가 없으면 undefined를 반환
const findName = names.find((name) => name.length >= 5);
console.log("🚀 ~ findName:", findName);

// some: 배열의 요소 중 하나라도 조건을 만족하면 true, 그렇지 않으면 false 리턴
const someName = names.some((name) => name.length >= 5);
console.log("🚀 ~ someName:", someName);

// every: 배열안의 모든 요소가 조건을 만족해야만 true, 그렇지 않으면 false 리턴
const everyName = names.every((name) => name.length >= 5);
console.log("🚀 ~ everyName:", everyName);

// spread syntax
const mbtiTypes = ["INTP", "ISFJ", "ENTJ"];
console.log("🚀 ~ mbtiTypes:", mbtiTypes);

const addMbtiTypes = ["ISTJ", ...mbtiTypes];
console.log("🚀 ~ addMbtiTypes:", addMbtiTypes);

const todoItem = {
  id: 123,
  todo: "JS공부하기",
  isComplete: false,
};

const setTodoItem = {
  ...todoItem,
  memo: "하기싫다...",
  isComplete: true, // 이미 존재하는 키값인 경우에는 수정
};
console.log("🚀 ~ setTodoItem:", setTodoItem);
