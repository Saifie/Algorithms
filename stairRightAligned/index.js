function staircase(n) {
  for (let i = 1; i <= n; i++) {
    let stair = "";
    for (let j = 1; j <= n; j++) {
      if (i <= j) {
        stair += " ";
      } else {
        stair += "#";
      }
    }
    console.log(stair);
  }
}

console.log(staircase(5));

// function staircase(n) {
//     let step = 0;
//     let spaces = n;
//     for (let i = 1; i <= n; i++) {
//       step += 1;
//       spaces -= 1;
//       const shap = " ".repeat(spaces) + "#".repeat(step);
//       console.log(shap);
//     }
//   }

//   console.log(staircase(5));
