// Default Parameter
const greeting = (username = "사용자") => {
  // 실행할 로직
  console.log(`안녕하세요, ${username}님!`);
};

greeting();
greeting("신수진");
