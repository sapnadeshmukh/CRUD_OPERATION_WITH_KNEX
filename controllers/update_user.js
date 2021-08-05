const knex=require('../database/connection')
const bcrypt=require("bcrypt")
module.exports.update_data=async(req,res)=>{
    knex("Users").
    where ('id',req.params.id)
    .update({
        name:req.body.name,
        email:req.body.email,
        password:await bcrypt.hash(req.body.password,10)


    }).then((data)=>{
        console.log(data);
        res.send("updated data!!")
    }).catch((err)=>{
        console.log(err);
        res.json({"message":err})
    })
}