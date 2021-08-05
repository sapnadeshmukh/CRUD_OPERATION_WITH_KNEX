const knex=require('../database/connection')
const bcrypt=require("bcrypt")

// To insert data

module.exports.create_data=async(req,res)=>{
    const userdetails={
        name:req.body.name,
        email:req.body.email,
        password:await bcrypt.hash(req.body.password,10)
    }
    knex('Users').insert(userdetails)
    .then((data)=>{
        console.log(data);
        res.send("data inserted")
    }).catch((err)=>{
        console.log(err)
        res.json({"message":err})
    })
}