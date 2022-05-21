function queensAttack(n, k, r_q, c_q, obstacles) {
  // Write your code here
  let left = c_q - 1;
  let right = n - c_q;
  let down = r_q - 1;
  let up = n - r_q;

  let upLeft = left < up ? left : up;
  let upRight = right < up ? rigt : up;
  let downLeft = left < down ? left : down;
  let downRight = right < down ? right : down;

  for (let i = 0; i < obstacles.length; i++) {
    let row = obstacles[i][0];
    let col = obstacles[i][1];
    //left
    if (row == r_q && col < c_q) {
      if (c_q - col - 1 < left) {
        left = c_q - col - 1;
      }
    }
    //right
    else if (row == r_q && col > c_q) {
      if (col - c_q - 1 < right) {
        right = col - c_q - 1;
      }
    }
    // down
    else if (col == c_q && row < r_q) {
      if (r_q - row - 1 < down) {
        down = r_q - row - 1;
      }
    }
    //up
    else if (col == c_q && row > r_q) {
      if (row - r_q - 1 < up) {
        up = row - c_q - 1;
      }
      //upleft diagnol
    } else if (row > r_q && col < c_q) {
      //checking is it in range of queen attack
      if (row - r_q == c_q - col) {
        if (row - r_q - 1 < upLeft) {
          upLeft = row - r_q - 1;
        }
      }
    }
    //upright diagnol
    else if (row > r_q && col > c_q) {
      if (row - r_q == col - c_q) {
        if (row - r_q - 1 < upRight) {
          upRight = row - r_q - 1;
        }
      }
    }
    //downleft diagnol
    else if (row < r_q && col < c_q) {
      if (row - r_q == col - c_q) {
        if (r_q - row - 1 < downLeft) {
          downLeft = r_q - row - 1;
        }
      }
    } else if (row < r_q && col > c_q) {
      if (r_q - row == col - c_q) {
        if (r_q - row - 1 < downRight) {
          downRight = r_q - row - 1;
        }
      }
    }
  }

  return upLeft;
}
console.log(
  queensAttack(5, 3, 4, 3, [
    [5, 5],
    [4, 2],
    [2, 3],
  ])
);
