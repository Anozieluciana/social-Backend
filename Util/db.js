const mongoose = require('mongoose')

const url = "mongodb+srv://silverlin:<silverlin12345>@cluster0.rakjo.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(url).then(()=>{
    console.log('connected to database')
}).catch((error)=>{
    console.log('failed to connect')
})
