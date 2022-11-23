module.exports = add;

function add(string) {
  // ### Step 1: the simplest thing
  if (!string) return "0";
  else if (string.length === 1) {
    return Number(string);
  }
  // ### Step 2: handle an unknown amount of numbers
  const number = string.split(",").map((ele) => Number(ele));
  // return number

  // ### Step 3: ignore big numbers
  let sum = 0;
  let error;
  const filtered = number.filter((num) => num < 1000);
  // return filtered

  //   ### Step 4: negative numbers
  if (filtered.some((num) => num < 0)) {
    return `Negatives not allowed: ${filtered
      .filter((num) => num < 0)
      .join(",")}`;
  } else {
    return filtered.reduce((acc, cur) => acc + cur, 0);
  }
}

console.log(add("4,5, 10000, -2, -7"));