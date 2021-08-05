const knex=require('../database/connection')

// To get users
module.exports.get_data=(req,res)=>{
    knex.select('*').from("Users")
    .then((data)=>{
        console.log(data);
        res.send({"data":data})
    }).catch((err)=>{
        console.log(err);
        res.json({"message":err})
    }) ;
}
