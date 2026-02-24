const daysOfWeek = [
  "월요일", // 0
  "화요일", // 1
  "수요일", // 2
  "목요일", // 3
  "금요일", // 4
  "토요일", // 5
  "일요일", // 6
];
console.log("🚀 ~ daysOfWeek:", daysOfWeek);

console.log("오늘 요일은?", daysOfWeek[1]);
console.log("내가 좋아하는 요일은?", daysOfWeek[4]);

const students = ["김완수", "김태희", "송혜진", "신수진", "임은혜"];
console.log("students 갯수(size)", students.length);

// 미션: students 배열에서 본인 이름 꺼내와서 콘솔에 찍기

const student = {
  name: "후츠릿",
  mbti: "ENTJ",
  isMale: false,
  subjects: ["HTML", "CSS", "JAVASCRIPT"],
};
console.log("🚀 ~ student:", student);

console.log("이름은?", student["name"]);

// 미션: 과목 배열 뽑아와서 콘솔에 찍어보기
console.log("과목 배열", student.subjects[2]); // dot표기법
