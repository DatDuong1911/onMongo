var router = require('express').Router();
var userService = require('../services/userService')
router.get("/", function(req, res) {
    userService.getAllUser().then(function(data) {
        res.json(data)
    }).catch(function(err) {
        res.json(err)
    })
})
module.exports = router
router.get("/:username", (req, res) => {
    let username = req.params.username
    userServises.getUserbyusername(username)
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
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