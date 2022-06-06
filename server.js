require ('./Util/db')
const express = require('express')
const cors = require('cors')
require("dotenv").config()

const port = process.env.Port || 3322
const app = express();

app.use(cors());
app.use(express.json())

app.get("/", (req,res)=>{
    res.status(200).json({
       message:'social backend'
    })
})

 app.listen(port, ()=>{
     console.log('listening to server '+port)
 })
