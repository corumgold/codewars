// https://www.codewars.com/kata/52685f7382004e774f0001f7

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59

// The maximum time never exceeds 359999 (99:59:59)

const solveCount = 0;

function humanReadable(seconds) {
  if (seconds >= 3600) {
    const hrs = seconds -= 3599;
    console.log(hrs, seconds);
  }
}

humanReadable(0); // '00:00:00'
humanReadable(59); // '00:00:59'
humanReadable(90); // '00:01:30'
humanReadable(45296); // '12:34:56'
