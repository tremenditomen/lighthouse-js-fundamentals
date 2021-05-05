const moves = [
  "east",
  "east",
  "east",
  "east",
  "west",
  "west",
  "south",
  "south",
  "south",
  "south",
  "south",
  "south",
  "north",
  "south",
];
const finalPosition = (moves) => {
  let position = [0, 0];
  for (let i of moves) {
    if (i === "west") {
      position[0]--;
    } else if (i === "east") {
      position[0]++;
    } else if (i === "north") {
      position[1]++;
    } else position[1]--;
  }
  return position;
};
console.log(finalPosition(moves));
