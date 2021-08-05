const express=require("express")
const router=express.Router()
const GetController=require('../controllers/get_user')

router.get('/',GetController.get_data)
module.exports=router