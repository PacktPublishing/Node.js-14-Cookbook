# reverse-sentence

Reverses the words of a sentence.

## Install

```sh
npm install @bethany.griggs/reverse-sentence
```

## API

```js
require('reverse') => Function
reverse(sentence) => String
```

## Example

```js
const reverseSentence = require("reverse-sentence");

const sentence = "Hello Beth!";

const reversed = reverseSentence(sentence);

console.log(reversed); // Beth! Hello
```

## License

MIT
