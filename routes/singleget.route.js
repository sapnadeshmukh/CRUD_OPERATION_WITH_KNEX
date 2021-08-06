const express=require("express")
const router=express.Router()
const GetSingleUserController=require('../controllers/single_user')

router.get('/:id',GetSingleUserController.single_user_data)
module.exports=router