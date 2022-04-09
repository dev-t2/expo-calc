// 자바스크립트는 Math 객체의 프로퍼티로 정의된 함수와 상수를 통해 더 복잡한 수학 계산을 지원
console.log(Math.ceil(0.5)); // 올림
console.log(Math.round(0.5)); // 반올림
console.log(Math.floor(0.5)); // 내림
console.log(Math.trunc(0.5)); // 소수점 제거
console.log(Math.abs(-5)); // 절대값
console.log(Math.max(1, 5, 3)); // 최댓값
console.log(Math.min(1, 5, 3)); // 최솟값
console.log(Math.random()); // 0 이상 1 미만의 랜덤한 숫자

console.log();

console.log(Infinity); // 양의 무한대
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(1 / 0); // Infinity
console.log(Number.MAX_VALUE * 2); // Infinity, 오버플로

console.log();

console.log(-Infinity); // 음의 무한대
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(-1 / 0); // -Infinity
console.log(-Number.MAX_VALUE * 2); // -Infinity, 오버플로

console.log();

// NaN 값은 자기 자신을 포함해 어떤 값과도 같지 않음
console.log(NaN); // Not a Number
console.log(Number.NaN); // NaN
console.log(0 / 0); // NaN
console.log(Infinity / Infinity); // NaN

console.log();

console.log(-0); // 음의 0
console.log(Number.MIN_VALUE / 2); // 0, 언더플로
console.log(-Number.MIN_VALUE / 2); // -0, 언더플로
console.log(-1 / Infinity); // -0

console.log();

const zero = 0;
const nZero = -0;

console.log(zero === nZero); // 양의 0은 음의 0과 차이가 없음
console.log(1 / zero === 1 / nZero); // 분모로 사용될 때는 예외

console.log();

console.log(Number.isNaN(NaN));
console.log(Number.isFinite(Infinity));
console.log(Number.isInteger(10));
console.log(Number.MIN_SAFE_INTEGER); // -(2 ** 53 - 1)
console.log(Number.MAX_SAFE_INTEGER); // (2 ** 53 - 1)
console.log(Number.isSafeInteger(10)); // MIN_SAFE_INTEGER 보다 크고 MAX_SAFE_INTEGER 보다 작은 정수 여부
console.log(Number.EPSILON); // (2 ** -52), 숫자를 구별할 수 있는 가장 작은 차이
