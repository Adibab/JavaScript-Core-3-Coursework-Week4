let getLargestNumber = require("./largest-number");

test("returns largest number in array", function () {
  // Arrange
  // Act
  // Assert
  const array = [3, 21, 88, 4, 36];
  expect(getLargestNumber([3, 21, 88, 4, 36])).toBe([88])
  expect(array).toEqual([[3, 21, 88, 4, 36]]);
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
