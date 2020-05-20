module.exports = reverse;

function reverse(sentence) {
  const wordsArray = sentence.split(" ");
  const reversedArray = wordsArray.reverse();
  const reversedSentence = reversedArray.join(" ");
  return reversedSentence;
}
