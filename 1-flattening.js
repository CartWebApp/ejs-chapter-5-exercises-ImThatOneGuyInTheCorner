let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce((accumulator, array) => accumulator.concat(array), []));
// → [1, 2, 3, 4, 5, 6]