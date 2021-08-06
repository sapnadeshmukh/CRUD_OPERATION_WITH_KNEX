const knex=require('../database/connection')

module.exports.single_user_data=(req,res)=>{
    knex.select('*').from("Users")
    .where("id",req.params.id)
    .then((data)=>{
        console.log("Got user id  details")
        res.send(data)
    }).catch((err)=>{
        console.log("Sorry!! don't get your id")
        res.send(err)


    })


}