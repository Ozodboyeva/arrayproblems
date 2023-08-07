function ArrayElements(array) {
  var result = [];

  for (let i = array.length - 1; i >= 0; i -= 2) {
    result.push(array[i]);
  }

  return result;
}

let array = [1, 2, 3, 4, 5, 6, 7];
console.log(ArrayElements(array)); // Output: [7, 5, 3, 1]
