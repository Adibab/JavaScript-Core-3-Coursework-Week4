let convertToOldRoman = require("./convert-to-old-roman");

describe("convert to old roman", function (){
  it ("return I if  passed 1 as an argument", () => {
expect(convertToOldRoman(1).toBe("I"))

  })

  it ( "return VI  if  passed 6 as an argument", ()=> {
    expect(convertToOldRoman(6).toBe("VI"))
  })
it ( "return XI if  passed 11 as an argument", ()=> {
    expect(convertToOldRoman(11).toBe("XI"))
  })

})
