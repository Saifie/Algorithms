// https://www.hackerrank.com/challenges/kangaroo/problem?isFullScreen=false

/**
 *
 * @param {} x1
 * @param {*} v1
 * @param {*} x2
 * @param {*} v2
 *
 * remeber the line equation
 * find the intersection of two line in x +  y + plan
 * y=mx+c    m is slop in this its v1 and v2 c is y intercept in this case its x1 and x2
 *  y=v1(x)  +x1
    y=v2 (x) +x2
    x(v1 +x1)= v1 +x2

    v1-v2=x2-x1
    2-3=5-0
    x=-5
    so formula is:
    x=x2-x1 /v1-v2
    y=v1(x)+x1


 *
 */
function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  let x = (x2 - x1) / (v1 - v2);
  console.log((x2 - x1) % (v1 - v2));
  let y = v1 * x + x1;
  console.log(x, y);
  if (x < 0 || y < 0) {
    return "No";
  }
  return "Yes";
}

console.log(kangaroo(0, 2, 5, 3));
