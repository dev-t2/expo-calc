const timestamp = Date.now();

console.log(timestamp); // 현재 시간을 타임스탬프(숫자)로 표현

console.log();

const now = new Date();

console.log(now); // 현재 시간을 Date 객체로 표현
console.log(now.getTime()); // 타임스탬프(숫자)로 변환
console.log(now.toISOString()); // 표준 형식의 문자열로 변환
