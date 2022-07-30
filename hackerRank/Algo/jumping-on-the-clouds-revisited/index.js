function jumpingOnTheCloudsRevisited(c, k) {
  let first;
  if (c.length % 2 === 0) {
    first = c[0];
  }
  first = c[1];
  let energy = 100;
  console.log(c.length);
  let currPoint = k;

  while (true && k > c.length) {
    let currElement = c[currPoint];

    console.log({ currPoint, currElement, energy });
    if (currPoint === 0) {
      break;
    }
    if (currElement === 1) {
      energy -= 3;
    } else {
      energy--;
    }
    currPoint = (currPoint + k) % c.length;
  }
  if (c[0] === 1) {
    energy -= 3;
  } else {
    energy--;
  }
  return energy;
}
console.log(
  jumpingOnTheCloudsRevisited(
    [1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1],
    19
  )
);

// 3--->0
// 6---->0
// 6+9---->0
// 2+3=---1
// 5+3---1
// 8+3---0
// 1+3---1
// 4+3---1
// 7+3---0
// 0
