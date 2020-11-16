// Arrow Functions
const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

// One parameter only
const square = x => x * x;

const horn = () => {
  console.log("Toot");
};
