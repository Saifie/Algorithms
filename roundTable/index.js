function factorial(n) {
  if (n === 0 || n === 1) return 1;
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact = ((fact % (Math.pow(10, 9) + 7)) * i) % (Math.pow(10, 9) + 7);
  }
  return fact;
}
function roundTable(n) {
  // the table have seat n+1
  // the probability of seating 10  aranging is (n-1)!
  //now considering a and b as grouped 2! mean as 1
  if (n === 2) return 4;

  let possibleArrangement = (factorial(n) * 2) % (Math.pow(10, 9) + 7);
  return possibleArrangement;
}

console.log(roundTable(1000));

module.exports = {
  //param A : integer
  //return an integer
  fact: function (n) {
    var fac = 1;
    var t = n;
    if (t === 1 || t === 0) return 1;
    while (t > 0) {
      fac = ((fac % (Math.pow(10, 9) + 7)) * t) % (Math.pow(10, 9) + 7);
      t--;
    }
    return fac;
  },
  solve: function (len) {
    if (len === 2) return 4;
    return (this.fact(len) * 2) % (Math.pow(10, 9) + 7);
  },
};
