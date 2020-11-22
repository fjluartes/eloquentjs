// Sum of Range: Create a function range, then a function sum
function range(start, end, step) {
  let arr = [];
  if (step == undefined) {
    step = 1;
  }
  if (step < 0) {
    for (let i = start; i >= end; i += step) {
      arr.push(parseInt(i));
    }
  } else {
    for (let i = start; i <= end; i += step) {
      arr.push(parseInt(i));
    }
  }
  return arr;
}
function sum(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    res += arr[i];
  }
  return res;
}
console.log(sum(range(1, 10)));
