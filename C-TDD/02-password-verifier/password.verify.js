


function passwordVerify(){
if ( !password || password.length < 8 || !/[A-z]/.test(password) || !/[0-9]/.test(password)){
    return "Password rejected"
} else {
    return "Password ok"
}
}

module.exports = passwordVerify;
