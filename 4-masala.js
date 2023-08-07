function oddNumbers(array) {
  let oddElements = [];

  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 1) {
      oddElements.push(array[i]);
    }
  }

  return oddElements;
}

let array = [4, 5, 7, 8, 6, 9];
let output = oddNumbers(array);
console.log(output.length);
console.log(output);
