const mongoose = require('mongoose')
const PostModel = mongoose.Schema({
    
        message:{
            type:String,
        },
        avatar:{
            type:String,
        },
        avatarID:{
            type:String,
        },
        like:[
            {
            type:mongoose.Schema.Types.ObjectId,
            ref:"comment"
        },
    ],
        user:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"users"
        }
        ]
    
}, {Timestamp:true})
module.exports=mongoose.model("post", PostModel)