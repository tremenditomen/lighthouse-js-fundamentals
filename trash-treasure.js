/*const bins = {
  waste: 4,
  recycling: 2,
  compost: 5
};
const trash = "recycling";*/
const smartGarbage = (trash, bins) => {
  if (trash === "recycling") {
    bins.recycling++;
  } else if (trash === "waste") {
    bins.waste++;
  } else if (trash === "compost") {
    bins.compost++;
  }
  return bins;
};
smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });
console.log(smartGarbage('compost', { waste: 4, recycling: 2, compost: 5 }))