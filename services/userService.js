var UserModel = require("../models/userModel")
var userService = {};

userService.getAllUser = function() {
    return UserModel.find()
}


userService.getUser = function(username) {
    return UserModel.find({
        username: username
    })
};

userService.signup = function(username, password, age, address) {
    return UserModel.create({
        username: username,
        password: password,
        age: age,
        address: address
    })
};


userService.updateUser = function(ageparams, username, password, age, address) {
    return UserModel.updateOne({
        age: ageparams
    }, {
        username: username,
        password: password,
        age: age,
        address: address,
    })
};
userService.delete = function(address) {
    return UserModel.deleteOne({
        address: address
    })
};

module.exports = userService