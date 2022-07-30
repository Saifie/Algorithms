function catAndAMouse(x, y, z) {
  let distanceFromX = Math.abs(z - x);
  let distanceFromY = Math.abs(z - y);
  if (distanceFromX > distanceFromY) {
    return "Cat B";
  } else if (distanceFromX < distanceFromY) {
    return "Cat A";
  }
  return "Mouse C";
}

console.log(catAndAMouse(1, 2, 3));
