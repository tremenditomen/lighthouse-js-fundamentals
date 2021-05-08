const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3
  }
];

const metric = "redness";

const judgeVegetable = (vegetables, metric) => {
  const rank = [];
  let winner = "";

  for (const index of vegetables) {
    rank.push(index[metric]);
  }
  const sorted = rank.sort(function (a, b) {
    return b - a;
  });

  for (const index of vegetables) {
    if (index[metric] === sorted[0]) {
      winner = index;
    }
  }

  return winner.submitter;
};

console.log(judgeVegetable(vegetables, metric));
