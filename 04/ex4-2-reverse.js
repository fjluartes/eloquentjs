// Reverse: Reverse an array
function reverseArray(arr) {
  let resArr = [];
  for (let i = arr.length-1; i >= 0; i--) {
    resArr.push(arr[i]);
  }
  return resArr;
}
console.log(reverseArray([1, 2, 3, 4, 5]));

function reverseArrayInPlace(arr) {
  let l = arr.length / 2;
  let end = arr.length - 1;
  for (let i = 0, j = end; i < l; i++, j--) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}
console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
