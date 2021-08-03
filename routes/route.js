const router=require("express").Router()
const knex=require('../database/connection')
const bcrypt=require('bcrypt')

// To get users
router.get('/',(req,res)=>{
    knex.select('*').from("Users")
.then((data)=>{
    console.log(data);
    res.send({"data":data})
}).catch((err)=>{
    console.log(err);
    res.json({"message":err})
}) ;
})


// To insert data
router.post('/',async(req,res)=>{
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
})


// To update user 
router.put('/:id',(req,res)=>{
    knex("Users").
    where ('id',req.params.id)
    .update({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password


    }).then((data)=>{
        console.log(data);
        res.send("updated data!!")
    }).catch((err)=>{
        console.log(err);
        res.json({"message":err})
    })
})

router.delete('/:id',(req,res)=>{
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
})


router.get('/:id',(req,res)=>{
    knex.select('*').from("Users")
    .where("id",req.params.id)
    .then((data)=>{
        console.log("Got user id  details")
        res.send(data)
    }).catch((err)=>{
        console.log("Sorry!! don't get your id")
        res.send(err)


    })


})


module.exports=router