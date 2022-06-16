function factorial(n) {
  if (n === 0) return 1;
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return Math.log(fact);
}
function roundTable(n) {
  // the table have seat n+1
  // the probability of seating 10  aranging is (n-1)!
  //now considering a and b as grouped 2! mean as 1
  // so it will become (n-2)!
  // as n=n+1 so formula is (n-1)!*2!/(n-1)!
  let possibleArrangement = factorial(n) * 2;
  return possibleArrangement;
}

console.log(roundTable(2));
