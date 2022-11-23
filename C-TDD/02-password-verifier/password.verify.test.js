let passwordVerify = require("./password.verify.js");

describe (" password verification", function (){

it ("return passowrd rejected if password is null", () =>{
expect(passwordVerify(null).toBe("Password rejected"));
})

it("return passowrd rejected if password length is less than 8 charaters", () => {
  expect(passwordVerify(pass).toBe("Password rejected"));
});

it("return passowrd rejected if password does not contain at least one upper case letter", () => {
  expect(passwordVerify(password2).toBe("Password rejected"));
});


it("return passowrd rejected if password does not contain at least one letter", () => {
  expect(passwordVerify(password).toBe("Password rejected"));
});

})
