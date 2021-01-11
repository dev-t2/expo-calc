let printMessage = '계산 결과';
let number1 = 10;
let number2 = 5;
let numberFloat = 0.45;
let result;

console.log(number1);
console.log(number2);
console.log(numberFloat);
console.log(result);

result = number1 + numberFloat;
console.log('덧셈 ' + printMessage);
console.log(result);

result = number1 - numberFloat;
console.log('뺄셈 ' + printMessage);
console.log(result);

result = number1 * number2;
console.log('곱셈 ' + printMessage);
console.log(result);

result = number1 / number2;
console.log('나눗셈 ' + printMessage);
console.log(result);

console.log('변수 출력');
console.log(number1);
console.log(number2);
console.log(numberFloat);
console.log(result);

numberFloat += 5;
console.log(numberFloat);

number1++;
console.log(number1);
number1--;
console.log(number1);

console.log('나머지 ' + printMessage);
console.log(number1 % number2);
