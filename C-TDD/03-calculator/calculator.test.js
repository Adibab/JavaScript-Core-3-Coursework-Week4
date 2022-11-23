let add = require("./calculator");


describe("add", function (){
const  input = "4,5, 10000, -2, -7"
const output = add(input)
expect((output).toEqual("negatives not allowed: -2,-7"));

})