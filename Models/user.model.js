
const mongoose= require('mongoose')

const userSchema = mongoose.Schema({
    email:String,
    password:String
},{
    versionKey:false
})

const kanbanuser = mongoose.model('kanbanuser',userSchema)

module.exports={
    kanbanuser
}