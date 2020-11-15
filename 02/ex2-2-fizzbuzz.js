// FizzBuzz: If divisible by 3, print Fizz. If divisible by 5, print Buzz. If divisible by both 3 and 5, print FizzBuzz.
for (let i = 1; i <= 100; i++) {
  if (i % 15 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
