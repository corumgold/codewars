// Link: https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

const solveCount = 1;

function findUniq(arr) {
  arr.sort();
  return arr[0] === arr[Math.ceil(arr.length / 2)]
    ? arr[arr.length - 1]
    : arr[0];
}

console.log(findUniq([1, 1, 1, 2, 1, 1])); // 2
console.log(findUniq([0, 0, 0.55, 0, 0])); // 0.55
