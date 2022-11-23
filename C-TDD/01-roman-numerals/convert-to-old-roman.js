
// part =1

function convertToOldRoman(n) {
  let roman = "";
  for (let i = 1; i <= n; i++) {
    roman += "I";
  }
  return roman;
}
console.log(convertToOldRoman(5));

module.exports = convertToOldRoman;


// part 2


function convertToOldRoman(n) {
  let roman = "";
  let numOf5sN10s;
  numOf5sN10s = Math.floor(n / 5);
  // return numOf5sN10s;

  for (let i = 1; i <= numOf5sN10s; i++) {
    roman += "V";
    n -= 5;
  }
  // console.log(n)
  for (let i = 1; i <= n; i++) {
    roman += "I";
  }
  return roman;
  // return n
}

console.log(convertToOldRoman(8));