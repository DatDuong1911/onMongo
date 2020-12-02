var UserModel = require("../models/userModel")
var userService = {};


//in ra toan bo nguoi dung
userService.getAllUser = function() {
    return UserModel.find()
}

//tao nguoi dung
userService.signup = function(username, password, age, address) {
    return UserModel.create({
        username: username,
        password: password,
        age: age,
        address: address
    })
};

//in ra nguoi dung co ten nhu yeu cau
userService.getUser = function(username) {
    return UserModel.find({
        username: username
    })
};


//cap nhat nguoi dung
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

//xoa nguoi dung
userService.delete = function(address) {
    return UserModel.deleteOne({
        address: address
    })
};

module.exports = userService