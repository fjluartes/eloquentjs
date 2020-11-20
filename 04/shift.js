// unshift: adds value in start of array
// shift: removes value in start of array
let todoList = [];
function remember(task) {
  todoList.push(task);
}
function getTask() {
  return todoList.shift();
}
function rememberUrgently(task) {
  todoList.unshift(task);
}

// indexOf: search index of a value in an array
let arr = [1, 2, 3, 2, 1];
console.log(arr.indexOf(2));

// lastIndexOf: search index of a value in an array starting from end
console.log(arr.lastIndexOf(2));

// slice: take elements starting from start index (inclusive) to end index (exclusive)
let arr2 = [0, 1, 2, 3, 4];
console.log(arr2.slice(2, 4)); // [2, 3]
console.log(arr2.slice(2)); // [2, 3, 4]

// concat: combine two arrays together (similar to + operator in strings)
function remove(array, index) {
  return array.slice(0, index)
    .concat(array.slice(index + 1));
}
let arr3 = ["a", "b", "c", "d", "e"];
console.log(remove(arr3, 2));
