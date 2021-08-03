const express=require('express')
const app=express()
require('dotenv').config()

require("./database/connection.js")
app.use(express.json())
app.use('',require('./routes/route'))

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`)
})