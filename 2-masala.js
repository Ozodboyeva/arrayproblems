function butunSon(n, A, B) {
  let array = [A, B];
  for (let i = 2; i < n; i++) {
    let sumNum = array.slice(0, i).reduce((a, b) => a + b, 0);
    array.push(sumNum);
  }

  return array;
}

let n = 5;
let A = 2;
let B = 3;
let overall = butunSon(n, A, B);
console.log(overall);
