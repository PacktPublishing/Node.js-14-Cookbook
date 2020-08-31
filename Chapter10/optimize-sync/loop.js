function sumOfSquares(maxNumber) {
  let i = 0;
  let sum = 0;
  for (i; i <= maxNumber; i++) {
    sum += i ** 2;
  }
  return sum;
}

module.exports = sumOfSquares;
