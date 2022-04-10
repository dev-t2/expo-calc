const s = 'Hello, ' + 'world';

console.log(s); // Hello, world
console.log(s.length); // 12

console.log();

// 문자열 반환
console.log(s.substring(1, 4)); // ell
console.log(s.slice(1, 4)); // ell
console.log(s.slice(-3)); // rld
console.log(s.split(', ')); // [ 'Hello', 'world' ]

console.log();

// 문자열 검색
console.log(s.indexOf('l')); // 2
console.log(s.indexOf('l', 3)); // 3
console.log(s.indexOf('z')); // -1
console.log(s.lastIndexOf('l')); // 10
console.log(s.startsWith('Hell')); // true
console.log(s.endsWith('!')); // false
console.log(s.includes('or')); // true
console.log(s.charAt(0)); // H
console.log(s.charAt(s.length - 1)); // d
console.log(s[0]); // H
console.log(s[s.length - 1]); // d
console.log(s.charCodeAt(0)); // 72, 주어진 위치의 16비트 숫자(0x48)

console.log();

// 문자열 변경
console.log(s.replace('world', 'JavaScript')); // Hello, JavaScript
console.log(s.toLowerCase()); // hello, world
console.log(s.toUpperCase()); // HELLO, WORLD

console.log();

// 패딩 함수
console.log('x'.padStart(3, '+')); // ++x
console.log('x'.padEnd(3, '-')); // x--

console.log();

// 공백 제거
console.log('   JavaScript   '.trim()); // 'JavaScript'
console.log('   JavaScript   '.trimStart()); // 'JavaScript   '
console.log('   JavaScript   '.trimEnd()); // '   JavaScript'

console.log();

// 기타
console.log(s.concat('!')); // Hello, world!
console.log('*'.repeat(5)); // *****
