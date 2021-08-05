const express=require("express")
const router=express.Router()
const UpdateController=require('../controllers/update_user')

router.put('/:id',UpdateController.update_data)
module.exports=router