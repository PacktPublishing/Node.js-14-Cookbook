const n = 10;
// Fibonacci calculator
const fibonacci = (n) => {
  let a = 0, b = 1, next = 1, i = 2;
  for (i; i <= n; i++) {
    next = a + b;
    a = b;
    b = next;
  }
  console.log(`The Fibonacci number at position ${n} is ${next}`);
};

fibonacci(n);
console.log("...");
