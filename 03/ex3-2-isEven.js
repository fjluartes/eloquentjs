// isEven: Test a number if it is even using recursion.
function isEven(a) {
  if (a < 0) {
    a *= -1;
  }
  if (a === 0) {
    return "even";
  } else if (a === 1) {
    return "odd";
  } else {
    return isEven(a - 2);
  }
}
console.log(isEven(3));
