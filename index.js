require ('./Util/db')
const express = require('express')
const cors = require('cors')

const port = process.env.Port || 3322
const app = express();

app.use(cors());
app.use(express.json())

app.get("/", (req,res)=>{
    res.status(200).json({
       status:'social backend'
    })
})

 app.listen(port, ()=>{
     console.log('listening to server '+port)
 })
