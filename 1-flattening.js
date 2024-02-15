let arrays = [[1, 2, 3], [4, 5], [6]];

let newArray;
newArray.concat(arrays.reduce((accumulator, array) => {
    newArray = newArray.concat(accumulator);
    return accumulator = array;
}, 0));

console.log(newArray);
// → [1, 2, 3, 4, 5, 6]