// Link: https://www.codewars.com/kata/520b9d2ad5c005041100000f

// Move the first letter of each word to the end of it, then add "ay" to the end of the word.
// Leave punctuation marks untouched.

let solveCount = 1;

function pigIt(str) {
  const punc = ".!?";
  return str
    .split(" ")
    .map((word) => {
      if (punc.includes(word)) return word;
      return word.slice(1).concat(word[0]).concat("ay");
    })
    .join(" ");
}

pigIt("Pig latin is cool"); // igPay atinlay siay oolcay
pigIt("Hello world !"); // elloHay orldway !
