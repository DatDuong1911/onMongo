var mongoose = require('../configs/dbConnect')
var Schema = mongoose.Schema

//định nghĩa cột (key trong một bản ghi)

var userSchema = new Schema({
    username: String,
    password: String,
    age: Number,
    address: String

}, {
    collection: "user"
})

var UserModel = mongoose.model("user", userSchema)
    //tạo data 


// UserModel.create({
//     username: "Duong",
//     password: 1996
// }).then(function(data) {
//     console.log(data);
// }).catch(function(err) {
//     console.log(err);
// })
//cập nhật
// UserModel.updateMany({
//     password: "123"
// }, {
//     username: "Dat Duong"
// }).then(function(data) {
//     console.log(data);
// }).catch(function(err) {
//     console.log(err);
// })

//xóa 1 bản ghi

// UserModel.deleteMany({
//     password: "1234"
// }).then(function(data) {
//     console.log(data);
// }).catch(function(err) {
//     console.log(err);
// })



//Tim ban ghi co do tuoi lon hon 25

// UserModel.find({
//     age: {
//         $gt: 25
//     }
// }).then(function(result) {
//     console.log(result);
// })

// lon hon 20 nho hon 30

// UserModel.find({
//     $and: [{
//         age: {
//             $gte: 20
//         }
//     }, {
//         age: { $lte: 30 }
//     }]
// }).then(function(result) {
//     console.log(result);
// })

//them mot ban ghi moi 

// UserModel.create({
//     username: "dada",
//     password: "1234",
//     age: 45,
//     address: "USA"
// }).then(function(data) {
//     console.log(data);
// })


// UserModel.find({

// }).then({

//ten "ta" hoac tuoi nho hon 30

// UserModel.find({
//     $or: [{
//             username: "ta"
//         }, {
//             age: { $lt: 30 }
//         }
//     ]
// }).then(function(result) {
//     console.log(result);
// })

//sap xep tuoi tang dan

// UserModel.find().sort({ age: 1 }).then((result) => {
//     console.log(result);
// })

// tuoi lon hon 20 va tang dan 
UserModel.find({
        $and: [{
            age: { $gt: 20 }
        }, { age: 1 }]
    }).then(function(data) {
        console.log(data);
    })
    //thanh hoac tuoi nho hon 30 

// UserModel.find({
//     $or: [{
//             username: "thanh"
//         }, {
//             age: { $lt: 30 }
//         }

//     ]
// }).then(function(result) {
//     console.log(result);
// })

//inra 5 phan tu dau

// UserModel.find().limit(5).then(function(result) {
//     console.log(result);
// })

// in ra 3 phan tu tu phan tu 5

// UserModel.find().limit(3).skip(4).then(function(result) {
//     console.log(result);
// })

// cap nhat bang findByIdAndUpdate
// UserModel.findByIdAndUpdate({ "5e54dfe448afde5434ca75b9" }, {
//     username: "Thai Ha"
// }).then(function(data) {
//     console.log(data);
// })

//cap nhat bang updateOne

// UserModel.updateOne({ _id: "5e54e012d276b72fd4246734" }, {
//     username: "Bac Ho"
// }).then(function(data) {
//     console.log(data);
// })

// // xoa nguoi dung

// UserModel.deleteOne({
//     _id: '5e54e012d276b72fd4246734'
// }).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });

//cap nhat all HP

// UserModel.updateMany({
//     address: "HP"
// }, {
//     password: 1234
// }).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });

// //cap nhat tuoi HP

// UserModel.updateOne({
//     address: "HP"
// }, {
//     age: 1234
// }).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });


// tim nguoi dau tien
// UserModel.findOne({ password: 1234 }).then(function(data) {
//     console.log(data);
// })


module.exports = UserModel