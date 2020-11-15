let num = Number(prompt("Pick a number"));
if (num < 10) {
  console.log("Small");
} else if (num < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}

// if (!Number.isNaN(num)) {
//   console.log("Your number is the square root of " + num * num);
// } else {
//   console.log("Hey, why didn't you give me a number?");
// }
