//Link: https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript

// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid.
// The function should return true if the string is valid, and false if it's invalid.

let solveCount = 0;

function validParentheses(parens) {
  let stack = [];
  for (let i = 0; i < parens.length; i++) {
    if (stack[stack.length - 1] === parens[i] || !stack[stack.length - 1]) {
      stack.push(parens[i]);
    } else stack.pop();
  }
  return stack.length ? false : true;
}

validParentheses("()"); //  true
validParentheses(")(()))"); //  false
validParentheses("("); //  false
validParentheses("(())((()())())"); //  true

// 0 <= input.length <= 100
