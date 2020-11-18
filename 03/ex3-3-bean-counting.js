// Bean Counting: Write a function that count B's in a string.
function countBs(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'B') {
      count++;
    }
  }
  return count;
}
console.log(countBs("Bustling Barbados Bombshell"));

// Write another function that counts a specific character in a string.
function countChar(str, c) {
  if (c === undefined) {
    return null;
  }
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === c) {
      count++;
    }
  }
  return count;
}
console.log(countChar("Bustling Barbados Bombshell"));
