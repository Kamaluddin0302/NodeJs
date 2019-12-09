const express = require('express')
const router = express.Router()
const User = require('./model/schema')
const bcrypt = require('bcryptjs')



router.get("/get" , (req,res)=> {
    res.send({
        message : "Kamal Uddin"
    })
})


// router.post("/SaveTodo", (req, res) => {
//     const hash = hashPassword(req.body.name);
//     const user = new User({
//         name : hash,
//         edit: req.body.edit
//     })
//     user.save().then(() => {
//         res.send({
//             message: "User Successfully Saved"
//         })
//     })
//         .catch((err) => {
//             res.send({
//                 message: err
//             })
//         })
// })

// router.post("/DeleteTodo", async (req, res) => {
//     console.log(req.body)
// await User.findOneAndDelete(req.body).then(()=>{
// res.send({
//     message: "Delete Succesfully"
// })
// }).catch((err)=> {
//     res.send({
//         err : err
// })
// })
// })


// router.post("/UpdateTodo", async (req, res) => {
//     console.log(req.body.updatename)
// await User.findOneAndUpdate(req.body.fristname, {name: req.body.updatename})

// .then(()=>{
// res.send({
//     message: "Update Succesfully"
// })
// }).catch((err)=> {
//     res.send({
//         err : err
//     })
// })
// })




// router.post("/deleteall", async (req, res) => {
//     console.log(req.body)
// await User.remove()

// .then(()=>{
// res.send({
//     message: "Delete All Succesfully"
// })
// }).catch((err)=> {
//     res.send({
//         err : err
//     })
// })
// })

// router.get("/get", async (req, res) => {
//     const user = await User.find();
//     res.send({
//         AllTodo: user
//     })
// })

// function hashPassword(password){
//     var salt = bcrypt.genSaltSync(10)
//     var hash = bcrypt.hashSync(password,salt);
//     return hash
// }
module.exports = router