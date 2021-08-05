const express=require("express")
const router=express.Router()
const CreateController=require('../controllers/create_user')

router.post('/',CreateController.create_data)
module.exports=router