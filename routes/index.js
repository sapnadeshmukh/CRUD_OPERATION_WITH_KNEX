const express=require("express")
const router=express.Router()

router.use('/getuser',require('./get.route'))
router.use('/createuser',require('./create.route'))
router.use('/updateuser',require('./update.route')) 
router.use('/deleteuser',require('./delete.route'))
router.use('/getsingleuser',require('./singleget.route'))
module.exports=router