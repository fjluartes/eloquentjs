// List: Create arrayToList function that converts an array to a list
// Create listToArray function that converts a list to an array
// Create prepend function to add an element to a list
// Create nth function to return the position of an element in a list
function arrayToList(arr) {
  let list = {}, temp = {};
  let l = arr.length - 1;
  for (let i = l; i >= 0; i--) {
    if (i == l) {
      temp = {
        value: arr[i],
        rest: null
      };
    } else {
      temp = {
        value: arr[i],
        rest: list
      };
    }
    list = temp;
  }
  return list;
}
console.log(arrayToList([1, 2, 3]));

function listToArray(list) {
  let arr = [];
  console.log(list);
}

let list2 = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
