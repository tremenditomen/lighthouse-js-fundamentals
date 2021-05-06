let range = (start, end, step) => {
  let arr = [];

  if (start === undefined || end === undefined || step === undefined) {
    let arr = [];
  } else if (start > end) {
    let arr = [];
  } else if (step <= 0) {
    let arr = [];
  } else {
    for (let i = start; i <= end; i += step) {
      arr.push(i);
    }
  }
  return arr;
};
console.log(range(11, 10, 2));
