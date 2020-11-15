// Chessboard: 8x8 grid with # and spaces. Size = 8 but can be changed to any integer.
let size = prompt("Board size");
for (let i = 0; i < size; i++) {
  let c = "";
  for (let j = 0; j < size; j++) {
    if (i % 2 != 0) {
      if (j % 2 != 0) {
        c += " ";
      } else {
        c += "#";
      }
    } else {
      if (j % 2 != 0) {
        c += "#";
      } else {
        c += " ";
      }
    }
  }
  c += '\n';
  console.log(c);
}
