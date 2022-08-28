function sequenceEquation(p) {
  let y = [];
  for (let i = 1; i <= p.length; i++) {
    let index = p.findIndex((item) => {
      return item === i;
    });
    index = index + 1;
    let yindex = p.findIndex((item) => {
      return item === index;
    });
    yindex = yindex + 1;
    y.push(yindex);
  }
  return y;
}
console.log(sequenceEquation([5, 2, 1, 3, 4]));
