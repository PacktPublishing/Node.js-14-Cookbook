function sumOfSquares(maxNumber) {
  const array = Array.from(Array(maxNumber + 1).keys());

  return array
    .map((number) => {
      return number ** 2;
    })
    .reduce((accumulator, item) => {
      return accumulator + item;
    });
}

module.exports = sumOfSquares;
