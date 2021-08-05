const express=require("express")
const router=express.Router()
const DeleteController=require('../controllers/delete_user')

router.delete('/:id',DeleteController.delete_data)
module.exports=router