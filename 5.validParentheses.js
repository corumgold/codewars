//Link: https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript

// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid.
// The function should return true if the string is valid, and false if it's invalid.

let solveCount = 0;

function validParentheses(parens) {
  debugger;
  let parensArr = parens.split("");
  for (let i = 0; i < parensArr.length; i++) {
    if (parensArr[i] === "(") {
      for (let j = i; j < parensArr.length; j++) {
        if (parensArr[j] === ")") {
          parensArr.splice(i, 1);
          parensArr.splice(j, 1);
          i -= 2;
          break;
        }
      }
    }
  }
  return parensArr.length ? false : true;
}

// validParentheses("()"); //  true
// validParentheses(")(()))"); //  false
// validParentheses("("); //  false
validParentheses("(())((()())())"); //  true

// 0 <= input.length <= 100
