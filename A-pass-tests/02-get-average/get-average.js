// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

let numbers = [4, "-", 8, 11, "hello", "57", 0, 2];
function average(numbers) {
  let newArray = [];
  numbers.forEach((element) => {
    if (Number.isInteger(element)) {
      newArray.push(element);
    }
  });
  // console.log(newArray)
  const average = newArray.reduce((acc, cur) => acc + cur, 0) / newArray.length;
  return average;
}
console.log(average(numbers));

module.exports = average;
