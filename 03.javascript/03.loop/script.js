let n_2 = 1;
let n_1 = 1;

console.log(n_2);
console.log(n_1);

for (let i = 0; i < 100; i++) {
  let n = n_2 + n_1;

  console.log(n);

  n_2 = n_1;
  n_1 = n;
}

n_2 = 1;
n_1 = 1;

console.log(n_2);
console.log(n_1);

let i = 0;

while (i < 100) {
  let n = n_2 + n_1;

  console.log(n);

  n_2 = n_1;
  n_1 = n;

  i++;
}
