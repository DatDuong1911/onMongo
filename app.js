var express = require('express')
var bodyParser = require('body-parser')
var userRouter = require('./router/user')
var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use("/user", userRouter)

app.listen(3000, function() {
    console.log("Da ket noi o cong 3000");
})