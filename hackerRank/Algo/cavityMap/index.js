function cavityMap(grid) {
  let array = [];
  array.push(grid[0]);
  for (var i = 1; i < grid.length - 1; i++) {
    let currElement = grid[i];
    let str = "" + currElement[0];
    for (var j = 1; j < currElement.length - 1; j++) {
      if (
        +currElement[j] > +currElement[j + 1] &&
        +currElement[j] > +currElement[j - 1] &&
        +currElement[j] > +grid[i + 1][j] &&
        +currElement[j] > +grid[i - 1][j]
      ) {
        str += "x";
      } else {
        str += currElement[j];
      }
    }
    if (currElement.length !== 1) {
      str += currElement[currElement.length - 1];
    }
    array.push(str);
  }
  if (grid.length !== 1) {
    array.push(grid[grid.length - 1]);
  }

  return array;
}

console.log(cavityMap(["1112", "1912", "1892", "1234"]));
