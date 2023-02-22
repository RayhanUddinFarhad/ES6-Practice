// Write an arrow function where it will do the following:
// a) Square each array element
// b) Calculate the sum of the squared elements
// c) Return the average of the sum of the squared elements
// Print the result


const array = [1, 2, 3, 4, 5];


const arrows = arrays => {

    const result = arrays.map  (square => square **2);

const sum = result.reduce ((first, second) => first + second , 0) 

const average = sum / arrays.length;

return average;


}

console.log (arrows (array))