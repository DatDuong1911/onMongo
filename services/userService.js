var UserModel = require("../models/userModel")
var userService = {};

userService.getAllUser = function() {
    return UserModel.find()
}
userService.signup = function(username, password, age, address) {
    return UserModel.create({
        username: username,
        password: password,
        age: age,
        address: address
    })
}

userService.updateUser = function(usernameparams, username, password, age, address) {
    return UserModel.updateMany({
        username: usernameparams
    }, {
        username: username,
        password: password,
        age: age,
        address: address,
    })
};


module.exports = userService