function numberArray(array) {
  let outputArray = [];
  let index = 0;
  while (index < array.length) {
    outputArray.push(array[index]);
    index += 2;
  }
  return outputArray;
}

const array = [1, 2, 3, 4, 5, 6];
const output = numberArray(array);
console.log(output);
