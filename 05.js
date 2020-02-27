function range(start, end) {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);
}
const result = range(0, 100);

//even dan odd

let genap = [];
let ganjil = [];
let i = 0;

for (i; i < result.length; i++) {
  if (result[i] % 2 == 0) {
    genap.push(result[i]);
  } else {
    ganjil.push(result[i]);
  }
}

//multiple 5
function multiple(item) {
  return item * 5;
}
let newArr = result.map(multiple);

// prime number less than 100
function isPrime(num) {
  if (num <= 1) return false;
  else if (num === 2) return true;
  else {
    for (let i = 2; i < num; i++) if (num % i === 0) return false;
    return true;
  }
}
let NumberPrime = result.filter(isPrime);
