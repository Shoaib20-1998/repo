
const mongoose= require('mongoose')

const userSchema = mongoose.Schema({
    email:String,
    password:String
},{
    versionKey:false
})

const Kanbanuser = mongoose.model('newuser',userSchema)

module.exports={
    Kanbanuser
}