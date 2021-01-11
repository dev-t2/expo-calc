const list = [
  { question: '제일 좋아하는 과일을 선택하세요.', options: ['사과', '복숭아', '포도', '바나나', '딸기'] },
  { question: '제일 좋아하는 음식을 선택하세요.', options: ['김밥', '파스타', '치킨', '초밥', '라면'] },
  { question: '제일 좋아하는 동물을 선택하세요.', options: ['개', '고양이', '토끼', '독수리', '여우'] },
];

for (let i = 0; i < list.length; i++) {
  let questionMessage = list[i].question + '\n';

  for (let j = 0; j < list[i].options.length; j++) {
    questionMessage += j + 1 + '. ' + list[i].options[j] + '\n';
  }

  list[i].answer = prompt(questionMessage);
}

for (let i = 0; i < list.length; i++) {
  const index = parseInt(list[i].answer);
  const message = list[i].question + '\n답변: ' + list[i].options[index - 1];

  alert(message);
}
