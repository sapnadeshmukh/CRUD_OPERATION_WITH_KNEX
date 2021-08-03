require('dotenv').config()

const knex=require("knex")({
    client:"mysql",
    connection:{
        host:process.env.db,
        user:process.env.user,
        password:process.env.password,
        database:process.env.db_name
    },
});

knex.schema.createTable("Users",(table)=>{
    table.increments('id').primary();
    table.string("name")
    table.string("email")
    table.string("password")
}).then((data)=>{
    console.log("Table has created!!!")
}).catch((err)=>{
    console.log("Table already exists!!")
})

module.exports=knex;