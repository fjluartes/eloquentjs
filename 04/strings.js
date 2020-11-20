// Strings
let kim = "Kim";
kim.age = "22";
console.log(kim.age); // undefined

// slice and indexOf in strings
console.log("coconuts".slice(4, 7));
console.log("coconuts".indexOf("u"));
console.log("one two three".indexOf("ee")); // 11

// trim: removes whitespace
console.log(" okay \n ".trim());

// padStart: pads a string given the desired length and padding character
console.log(String(6).padStart(3, "0"));

// repeat
console.log("LA".repeat(3));

// length, access specific character
let string = "abc";
console.log(string.length);
console.log(string[1]);
