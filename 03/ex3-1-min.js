// Minimum: Take two arguments and return the minimum.
function minimum(a, b) {
  if (b === undefined) {
    return NaN;
  } else if (a === b) {
    return a;
  } else if (a > b) {
    return b;
  } else {
    return a;
  }
}
console.log(minimum(7, 8));
