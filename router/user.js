var express = require('express');
var router = require('express').Router();
var userService = require('../services/userService')
router.get("/", function(req, res) {
    userService.getAllUser().then(function(data) {
        res.json(data)
    }).catch(function(err) {
        res.json(err)
    })
})


router.post("/signup", function(req, res) {
    var username = req.body.username;
    var password = req.body.password;

    var age = req.body.age;
    var address = req.body.address;
    userService.signup(username, password, age, address).then(function(result) {
        res.json({
            error: false,
            message: "Tao thanh cong",
            data: result
        })
    }).catch(function(err) {
        res.json({
            error: true,
            message: "ket noi khong thanh cong"
        })
    })
})

router.get("/:username", (req, res) => {
    var username = req.params.username
    userService.getUser(username)
        .then(function(data) {
            if (data.lenght !== 0) {
                res.json(data)
            } else {
                res.json("Khong co nguoi dung")
            }
        })
        .catch((err) => {
            res.json(err)
        })
})

router.put("/:age", (req, res) => {
    let ageparams = req.params.age
    let username = req.body.username;
    let password = req.body.password;
    let age = req.body.age;
    let address = req.body.address
    userService.updateUser(ageparams, username, password, age, address)
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.json(err)
        })
})

router.delete("/:address", function(req, res) {
    var address = req.params.address
    userService.delete(address).then(function(data) {
        res.json(data)
    }).catch(function(err) {
        res.json(err)
    })
})

module.exports = router