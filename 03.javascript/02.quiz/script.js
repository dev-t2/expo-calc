const solution = 10;
const input = prompt('정수를 입력하세요.');

if (input > solution + 2) {
  alert('입력한 값보다 작습니다.');
} else if (input < solution - 2) {
  alert('입력한 값보다 큽니다.');
} else {
  if (input === solution) {
    alert('입력한 값이랑 같습니다.');
  } else {
    alert('입력한 값이랑 비슷합니다.');
  }
}

const gender = prompt('성별을 입력하세요.');

switch (gender) {
  case '남자':
    alert('Male');

    break;
  case '여자':
    alert('Female');

    break;
  default:
    alert('남자, 여자 중 하나를 입력하세요.');
}
