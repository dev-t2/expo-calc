// 자바스크립트는 IEEE 754 이진 부동 소수점 표현을 사용
// 이진 부동 소수점 표현은 0.1 같은 단순한 숫자를 정확히 표현하지 못함

const x = 0.3 - 0.2;
console.log(x);

const y = 0.2 - 0.1;
console.log(y);

console.log();

console.log(x === 0.1);
console.log(y === 0.1);
console.log(x === y);
