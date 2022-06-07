const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    
        fullname:{
            type:String,
        },
        username:{
            type:String,
        },
        email:{
            type:String,
            unique:true
        },
        password:[
            {
            type:String
        },
    ],
        avatar:
        {
            type:String
        },
        avatarID:
        {
            type:String
        },
        followings:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"users"
        },
        ],
        followers:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"users"
        },
        ],
    
}, {Timestamp:true})
module.exports=mongoose.model("post", userSchema)