function oddElements(array) {
  let evenElements = [];
  let oddElements = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenElements.push(array[i]);
    }
  }
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] % 2 !== 0) {
      oddElements.push(array[i]);
    }
  }

  let result = evenElements.concat(oddElements);

  return result;
}

let array = [4, 5, 7, 8, 6, 9];
let output = oddElements(array);
console.log(output.join(" "));
//4 8 6 9 7 5
