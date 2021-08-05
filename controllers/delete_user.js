const knex=require('../database/connection')

module.exports.delete_data=(req,res)=>{
    knex("Users")
        .where('id',req.params.id)
        .del()
        .then((data)=>{
            console.log(data);
            res.send("user details deleted")
        }).catch((err)=>{
            console.log(err);
            res.json({"message":err})
        });
}